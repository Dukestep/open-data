"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function isIE() {
  return window.navigator.userAgent.match(/(MSIE|Trident)/);
}

if (isIE()) {
  var map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({
      source: new ol.source.OSM()
    }), new ol.layer.Tile({
      source: new ol.source.TileWMS({
        format: 'image/png',
        url: 'https://geo.weather.gc.ca/geomet/',
        params: {
          'LAYERS': 'RADAR_1KM_RSNO',
          'TILED': true
        }
      })
    }), new ol.layer.Tile({
      source: new ol.source.TileWMS({
        format: 'image/png',
        url: 'https://geo.weather.gc.ca/geomet/',
        params: {
          'LAYERS': 'RADAR_COVERAGE_RSNO.INV',
          'TILED': true
        }
      })
    })],
    view: new ol.View({
      center: ol.proj.fromLonLat([-97, 57]),
      zoom: 3
    })
  });
} else {
  var getRadarStartEndTime =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var response, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&request=GetCapabilities&version=1.3.0&LAYERS=RADAR_1KM_RSNO');

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.text().then(function (data) {
                return parser.parseFromString(data, 'text/xml').getElementsByTagName('Dimension')[0].innerHTML.split('/');
              });

            case 5:
              data = _context.sent;
              return _context.abrupt("return", [new Date(data[0]), new Date(data[1])]);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getRadarStartEndTime() {
      return _ref.apply(this, arguments);
    };
  }();

  var updateInfo = function updateInfo(current_time) {
    var el = document.getElementById('info');
    el.innerHTML = "Time / Heure (UTC): ".concat(current_time.toISOString());
  };

  var setTime = function setTime() {
    current_time = current_time;
    getRadarStartEndTime().then(function (data) {
      if (current_time === null) {
        current_time = data[0];
      } else if (current_time >= data[1]) {
        current_time = data[0];
      } else {
        current_time = new Date(current_time.setMinutes(current_time.getMinutes() + 10));
      }

      layers[1].getSource().updateParams({
        'TIME': current_time.toISOString().split('.')[0] + "Z"
      });
      updateInfo(current_time);
    });
  };

  var parser = new DOMParser();
  var frameRate = 1.0; // frames per second

  var animationId = null;
  var current_time = null;
  var layers = [new ol.layer.Tile({
    source: new ol.source.OSM()
  }), new ol.layer.Image({
    source: new ol.source.ImageWMS({
      format: 'image/png',
      url: 'https://geo.weather.gc.ca/geomet/',
      params: {
        'LAYERS': 'RADAR_1KM_RSNO',
        'TILED': true
      }
    })
  }), new ol.layer.Tile({
    source: new ol.source.TileWMS({
      format: 'image/png',
      url: 'https://geo.weather.gc.ca/geomet/',
      params: {
        'LAYERS': 'RADAR_COVERAGE_RSNO.INV',
        'TILED': true
      }
    })
  })];

  var _map = new ol.Map({
    target: 'map',
    layers: layers,
    view: new ol.View({
      center: ol.proj.fromLonLat([-97, 57]),
      zoom: 3
    })
  });

  setTime();

  var stop = function stop() {
    if (animationId !== null) {
      window.clearInterval(animationId);
      animationId = null;
    }
  };

  var play = function play() {
    stop();
    animationId = window.setInterval(setTime, 1000 / frameRate);
  };

  var startButton = document.getElementById('play');
  startButton.addEventListener('click', play, false);
  var stopButton = document.getElementById('pause');
  stopButton.addEventListener('click', stop, false);
}