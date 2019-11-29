function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const parser = new DOMParser();

function getRadarStartEndTime() {
  return _getRadarStartEndTime.apply(this, arguments);
}

function _getRadarStartEndTime() {
  _getRadarStartEndTime = _asyncToGenerator(function* () {
    let response = yield fetch('https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&request=GetCapabilities&version=1.3.0&LAYERS=RADAR_1KM_RSNO');
    let data = yield response.text().then(data => parser.parseFromString(data, 'text/xml').getElementsByTagName('Dimension')[0].innerHTML.split('/'));
    return [new Date(data[0]), new Date(data[1])];
  });
  return _getRadarStartEndTime.apply(this, arguments);
}

let frameRate = 1.0; // frames per second

let animationId = null;
let current_time = null;
let layers = [new ol.layer.Tile({
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
let map = new ol.Map({
  target: 'map',
  layers: layers,
  view: new ol.View({
    center: ol.proj.fromLonLat([-97, 57]),
    zoom: 3
  })
});

function updateInfo(current_time) {
  let el = document.getElementById('info');
  el.innerHTML = `Time / Heure (UTC): ${current_time.toISOString()}`;
}

function setTime() {
  current_time = current_time;
  getRadarStartEndTime().then(data => {
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
}

setTime();

let stop = function () {
  if (animationId !== null) {
    window.clearInterval(animationId);
    animationId = null;
  }
};

let play = function () {
  stop();
  animationId = window.setInterval(setTime, 1000 / frameRate);
};

let startButton = document.getElementById('play');
startButton.addEventListener('click', play, false);
let stopButton = document.getElementById('pause');
stopButton.addEventListener('click', stop, false);