const parser = new DOMParser();

let layers = [
  new ol.layer.Tile({
    source: new ol.source.OSM()
  }),
  new ol.layer.Tile({
    source: new ol.source.TileWMS({
      format: 'image/png',
      url: 'https://geo.weather.gc.ca/geomet-climate',
      params: { 'LAYERS': 'DCS.TX.RCP85.YEAR.2081-2100_PCTL50', 'TILED': true },
      crossOrigin: 'Anonymous'
    })
  }),
]

let map = new ol.Map({
  target: 'map',
  layers: layers,
  view: new ol.View({
    center: ol.proj.fromLonLat([-97, 57]),
    zoom: 3
  })
});

let exportMapFunction = function (e) {
  map.once('postcompose', function (event) {
    var canvas = event.context.canvas;
    canvas.toBlob(function (blob) {
      saveAs(blob, 'msc-geomet_web-map_export.jpg')
    }, 'image/jpeg', 0.9);
  });
  map.renderSync();
};

let exportButton = document.getElementById('exportmap');
exportButton.addEventListener('click', exportMapFunction, false);
