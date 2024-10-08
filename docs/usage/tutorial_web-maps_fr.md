[In English](tutorial_web-maps_en.md)

![ECCC logo](../img_eccc-logo.png)

[TdM](../readme_fr.md) > [Aperçu de l'utilisation](readme_fr.md) > Créer des cartes web interactives

# Tutoriel : créer des cartes interactives sur le web avec OpenLayers et Leaflet

Les services web géospatiaux de [GeoMet du SMC](../msc-geomet/readme_fr.md) peuvent facilement être intégrés dans des bibliothèques de cartographie web libres et gratuites telles que [OpenLayers](https://openlayers.org/) et [Leaflet](https://leafletjs.com/) pour créer des cartes interactives pour pages web et applications mobiles. Ce tutoriel vous montrera comment travailler avec le standard WMS (Web Map Service) en utilisant ces deux bibliothèques. À la fin, vous serez en mesure d'afficher n'importe quelle couche WMS de GeoMet du SMC sur une carte interactive, d'interroger la couche pour obtenir des données et d'animer des couches selon une dimension temporelle.

- [Afficher une couche WMS](#afficher-une-couche-wms)
    * [Exemple avec OpenLayers](#exemple-avec-openlayers)
    * [Exemple avec Leaflet](#exemple-avec-leaflet)
- [Créer des popups interactifs avec OpenLayers](#créer-des-popups-interactifs-avec-openlayers)
- [Animation de couches WMS temporelles avec OpenLayers](#animation-de-couches-wms-temporelles-avec-openlayers)

## Afficher une couche WMS

Les étapes suivantes vous montreront comment créer une carte web simple avec OpenLayers et Leaflet. La carte affichera les données de température de surface de l'air du Système global de prévision déterministe (SGPD) (`GPDS.ETA_TT`) sur un fond de carte de [OpenStreetMap](https://www.openstreetmap.org/). Un exemple est disponible pour les librairies OpenLayers et Leaflet.

### Exemple avec OpenLayers

#### HTML

```html
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    #map {
      width: 100%;
      height: 400px;
    } 
  </style>
  <title>Exemple d'OpenLayers avec une couche de GeoMet du SMC</title>
  <meta name="description" content="Exemple d'OpenLayers avec une couche de GeoMet du SMC">
  <meta name="author" content="CCMEP">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v7.3.0/ol.css" type="text/css"/>
  <script src="https://cdn.jsdelivr.net/npm/ol@v7.3.0/dist/ol.js"></script>
</head>

<body>
    <div id="map"></div>

    <script src="./tutorial.js"></script>
</body>
</html>
```

Afin d'utiliser OpenLayers, nous devons importer les bibliothèques JS et CSS requises. Un élément `<div>` est ajouté dans le corps de notre document HTML et assigné d'un attribut `id` avec une valeur de `map`. La valeur "id" sera référencée dans le code JavaScript afin de spécifier où placer la carte interactive dans le document HTML.
Un élément `<script>` est également inclus dans le corps du document HTML, afin de lier le fichier JavaScript à notre HTML.
Un peu de CSS est également ajouté dans la balise `<head>` afin de définir la largeur et la hauteur du conteneur de la carte.

#### JavaScript

Le code HTML étant maintenant terminé, tournons notre attention vers l'écriture du code JavaScript nécessaire à la création de notre carte web.

```javascript
/* Nom du fichier : tutorial.js */

let layers_to_add = [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    new ol.layer.Tile({
      opacity: 0.4,
      source: new ol.source.TileWMS({
        url: 'https://geo.weather.gc.ca/geomet/',
        params: {'LAYERS': 'GDPS.ETA_TT', 'TILED': true},
        transition: 0
      })
    })
  ];

let map = new ol.Map({
  target: 'map',
  layers: layers_to_add,
  view: new ol.View({
    center: ol.proj.fromLonLat([-97, 57]),
    zoom: 0
  })
});
```

Pour garder les choses en ordre, nous créons un tableau de "couches à ajouter" qui contient une liste de couches que nous voulons ajouter à notre carte. Chaque élément est une couche qui est liée à une source. Dans ce cas, deux couches sont ajoutées à la carte : (1) la couche OpenStreetMap pour notre carte de base et (2) la couche WMS de GeoMet-Météo pour le Système global de prévision déterministe (SGPD) de la température de l'air à la surface. La source de la couche de température de l'air à la surface du SGPD a également quelques propriétés supplémentaires :

 * `url` : URL du service WMS
 * `params` : paramètres de la requête WMS, le paramètre `LAYERS` est requis
 * `transition` : durée de la transition d'opacité pour le rendu. Nous désactivons cette option ici car nous définissons une opacité et nous voulons qu'elle soit appliquée avant l'affichage de chaque tuile

Ensuite, nous créons une nouvelle variable appelée "map" et utilisons le constructeur "o.Map" pour définir la carte qui sera rendue dans notre document HTML. Dans l'objet passé au constructeur, définissez une "target" pour notre carte (par exemple la valeur "id" du conteneur HTML, dans ce cas "map"). Le tableau `layers_to_add` est ensuite passé à la propriété `layers` et le constructeur `ol.View` est utilisé pour définir la vue initiale de notre carte. Dans notre cas, nous définissons le niveau de zoom initial et nous centrons la vue sur une coordonnée lon/lat spécifique.

Vous trouverez ci-dessous un exemple du code ci-dessus. Essayez de modifier le code JavaScript pour afficher une autre couche, changer l'opacité, et les coordonnées initiales du zoom et du centre de la carte.

<iframe height="300" style="width: 100%;" scrolling="no" title="Simple couche WMS de GeoMet avec OpenLayers" src="https://codepen.io/eccc-msc/embed/jObyoPw?height=281&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  Voir le "Pen" <a href='https://codepen.io/eccc-msc/pen/jObyoPw'>Simple couche WMS de GeoMet avec OpenLayers</a> par le SMC d'ECCC
  (<a href='https://codepen.io/eccc-msc'>@eccc-msc</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Exemple avec Leaflet

#### HTML

```html
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    #map {
      width: 100%;
      height: 400px;
    }
  </style>
  <title>Exemple de couche WMS de GeoMet du SMC avec Leaflet</title>
  <meta name="description" content="Exemple de couche WMS de GeoMet du SMC avec Leaflet">
  <meta name="author" content="CCMEP">

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
  <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
</head>

<body>
  <div id="map"></div>
  
  <script src="./tutorial.js"></script>
</body>
</html>
```

Afin d'utiliser Leaflet, nous devons importer les bibliothèques JS et CSS requises. Un élément `<div>` est ajouté dans le corps de notre document HTML et ass igné d'un attribut `id` avec une valeur de `map`. La valeur "id" sera référencée dans le code JavaScript afin de spécifier où rendre la carte interactive dans le document HTML.
Un élément `<script>` est également inclus dans le corps du document HTML, afin de lier le fichier JavaScript à notre HTML.
Un peu de CSS est également ajouté dans la balise `<head>` afin de définir la largeur et la hauteur du conteneur de la carte.

#### JavaScript

Le code HTML étant maintenant terminé, tournons notre attention vers l'écriture du code JavaScript nécessaire à la création de notre carte web.

```javascript
/* Nom du fichier : tutorial.js */

let map = L.map("map").setView([0,0], 3);

let OpenStreetMap_Mapnik = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(map);

let wmsLayer = L.tileLayer.wms('https://geo.weather.gc.ca/geomet?', {
    layers: 'GDPS.ETA_TT',
    version: '1.3.0',
    opacity: 0.5,
}).addTo(map);
```

Le code ci-dessus initialise un [objet de carte](https://leafletjs.com/reference-1.6.0.html#map) en utilisant l'API de Leaflet et définit la vue initiale de la carte avec la méthode [<code>setView</code>](https://leafletjs.com/reference-1.6.0.html#map-setview).

Après l'instanciation de la carte, deux couches sont définies et ajoutées à la carte. Pour chaque couche, un URL de base est passé ainsi que les paramètres/options utilisés pour définir plus en détail la couche. Par exemple, lors de l'instanciation de la variable `wmsLayer`, nous définissons l'opacité de la couche `GDPS.ETA_TT` et la version WMS à utiliser lorsqu'une requête est faite dans les paramètres de l'objet.

Voir l'exemple ci-dessous :

<iframe height="300" style="width: 100%;" scrolling="no" title="Exemple simple de couche WMS de GeoMet avec Leaflet" src="https://codepen.io/eccc-msc/embed/GRpragg?height=265&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  Voir le "Pen" <a href='https://codepen.io/eccc-msc/pen/GRpragg'>Exemple simple de couche WMS de GeoMet avec Leaflet</a> par le SMC d'ECCC
  (<a href='https://codepen.io/eccc-msc'>@eccc-msc</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Créer des popups interactifs avec OpenLayers

Interrogeons maintenant une couche WMS pour accéder à la date sous-jacente via un popup. Le WMS permet à un utilisateur de faire une demande GetFeatureInfo pour extraire les données brutes associées à une coordonnée sur la carte. En utilisant l'API OpenLayers, nous allons créer une fenêtre contextuelle lorsqu'un utilisateur clique sur la carte qui affichera les coordonnées du point cliqué ainsi que la valeur de la donnée sous-jacente. Cette implémentation s'inspire fortement des exemples [popup](https://openlayers.org/en/latest/examples/popup.html?q=popup) et [WMS GetFeatureInfo](https://openlayers.org/en/latest/examples/getfeatureinfo-tile.html?q=popup) fournis par OpenLayers.

### HTML

Il faudra ajouter quelques lignes de code HTML et CSS supplémentaires à notre document HTML initial.

```html
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    #map {
      width: 100%;
      height: 800px;
    }

    /* Ajout du CSS pour la fenêtre contextuelle */
    .ol-popup {
      position: absolute;
      background-color: white;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      padding: 15px;
      border-radius: 10px;
      border: 1px solid #cccccc;
      bottom: 12px;
      left: -50px;
      min-width: 300px;
    }

    .ol-popup:after,
    .ol-popup:before {
      top: 100%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    .ol-popup:after {
      border-top-color: white;
      border-width: 10px;
      left: 48px;
      margin-left: -10px;
    }

    .ol-popup:before {
      border-top-color: #cccccc;
      border-width: 11px;
      left: 48px;
      margin-left: -11px;
    }

    .ol-popup-closer {
      text-decoration: none;
      position: absolute;
      top: 5px;
      right: 8px;
    }

    .ol-popup-closer:after {
      content: "✖";
      color: #A9A9A9;
    }
  </style>

  <title>Exemple de couche WMS de GeoMet avec OpenLayers</title>
  <meta name="description" content="Exemple de couche WMS de GeoMet avec OpenLayers">
  <meta name="author" content="CCMEP">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v7.3.0/ol.css" type="text/css"/>
  <script src="https://cdn.jsdelivr.net/npm/ol@v7.3.0/dist/ol.js"></script>
</head>

<body>
  <div id="map"></div>
  <div id="popup" class="ol-popup">
    <a href="#" id="popup-closer" class="ol-popup-closer"></a>
    <div id="popup-content"></div>
  </div>

  <script src="./tutorial.js"></script>
</body>
</html>
```

Pour créer le popup, un nouvel élément "div" est ajouté. Dans ce nouvel élément, une balise d'ancrage est ajoutée pour permettre la fermeture de la fenêtre contextuelle lorsqu'elle est affichée sur la carte. Un "div" vide contiendra les résultats du GetFeatureInfo et les coordonnées du point cliqué sur la carte. Le CSS supplémentaire est utilisé pour définir l'aspect et la convivialité de la fenêtre contextuelle ainsi que pour afficher/masquer la fenêtre contextuelle lorsque l'utilisateur clique sur la carte.

### JavaScript

```javascript
/* Nom du fichier : tutorial.js */

/**
 * Éléments de la fenêtre contextuelle
 */
let container = document.getElementById("popup");
let content = document.getElementById("popup-content");
let closer = document.getElementById("popup-closer");


/**
 * Créer un élément "Overlay" pour ancrer la fenêtre contextuelle sur la carte
 */
let overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
});


/**
 * Ajoutez un gestionnaire de clic pour cacher la fenêtre contextuelle
 * @return {boolean} ne pas suivre le href
 */
closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

let layers = [
  new ol.layer.Tile({
    source: new ol.source.OSM()
  }),
  new ol.layer.Tile({
    opacity: 0.4,
    source: new ol.source.TileWMS({
      url: "https://geo.weather.gc.ca/geomet",
      params: { LAYERS: "GDPS.ETA_TT", TILED: true },
      transition: 0
    })
  })
];

let map = new ol.Map({
  target: "map",
  layers: layers,
  overlays: [overlay],
  view: new ol.View({
    center: ol.proj.fromLonLat([-97, 57]),
    zoom: 0
  })
});


map.on("singleclick", function (evt) {
  let coordinate = evt.coordinate;
  let xy_coordinates = ol.coordinate.toStringXY(
    ol.proj.toLonLat(evt.coordinate),
    4
  );
  let viewResolution = map.getView().getResolution();
  let wms_source = map.getLayers().item(1).getSource();
  let url = wms_source.getFeatureInfoUrl(
    coordinate,
    viewResolution,
    "EPSG:3857",
    { INFO_FORMAT: "application/json" }
  );
  content.innerHTML = '<p align="center">Chargement...</p>';
  overlay.setPosition(evt.coordinate);
  if (url) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        content.innerHTML = `
Température de l'air à la surface<br>
Coordonnées (Lon/Lat): </> <code>${xy_coordinates}</code><br>
Valeur: </b><code>${Math.round(json.features[0].properties.value)} °C</code>`;
      });
  }
});
```

Il y a quatre principaux ajouts au code JavaScript.

Tout d'abord, nous créons des références aux trois éléments HTML qui sont utilisés par le popup ("container", "content" et "closer").

Le constructeur [<code>ol.Overlay()</code>](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html) est ensuite utilisé pour créer une nouvelle superposition qui sera utilisée pour ancrer la fenêtre contextuelle à la carte. Notez que le "container" (c'est-à-dire notre fenêtre contextuelle) est associé à la propriété "element " de l'object passé au constructeur de l'"Overlay". La superposition est ensuite passée comme un élément de tableau à la propriété "Overlays" lors de la construction de la carte.

Un événement "onclick" est alors ajouté au `closer` (c'est-à-dire la balise `<a>` dans le popup), qui fixe la position du recouvrement à `undefined`, cachant ainsi efficacement le recouvrement lorsque la balise d'ancrage contenue dans la fenêtre contextuelle est cliquée.

Finalement, notre carte profitera de la méthode [<code>ol.Map.on()</code>](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#on) pour écouter les événements `singleclick` sur la carte. La fonction de rappel qui est déclenchée par l'événement fait ce qui suit :

* Récupère les coordonnées du point de la carte cliqué, puis reprojette les coordonnées en EPSG:4326 (WSG 84). La méthode `ol.coordinate.toStringXY` transforme les coordonnées en une chaîne de caractères délimités par des virgules
* Récupère la résolution de la vue de la carte
* Récupère la source de la couche `GDPS.ETA_TT`
* Utilise la méthode `ol.source.TileWMS.getFeatureInfoUrl()` pour créer une requête WMS GetFeatureInfo. Sont passés en argument les coordonnées de l'événement de clic, la résolution de la vue, la projection de la carte, et un objet contenant tout paramètre GetFeatureInfo (au moins `INFO_FORMAT` doit être fourni)
* Fixe la position de la superposition aux coordonnées de l'événement de clic initial
* Si l'URL GetFeatureInfo est correctement construit, la demande GetFeatureInfo est soumise en utilisant l'API JavaScript. Dès réception d'une réponse, le JSON est récupéré et le contenu de la fenêtre contextuelle est mis à jour avec du HTML supplémentaire qui inclut les coordonnées et la propriété de valeur du première élément GeoJSON récupéré par la requête GetFeatureInfo

Voir l'exemple ci-dessous :

<iframe height="300" style="width: 100%;" scrolling="no" title="GetFeatureInfo avec GeoMet et OpenLayers" src="https://codepen.io/eccc-msc/embed/zYvNQvL?height=300&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  Voir le "Pen" <a href='https://codepen.io/eccc-msc/pen/zYvNQvL'>GetFeatureInfo avec GeoMet et OpenLayers</a> par le SMC d'ECCC
  (<a href='https://codepen.io/eccc-msc'>@eccc-msc</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Animation de couches WMS temporelles avec OpenLayers

Une quantité importante de données servies par GeoMet du SMC a une ou plusieurs dimensions temporelles. La section suivante explique comment OpenLayers peut nous aider à visualiser et à animer les différents pas de temps de ces couches, dans ce cas-ci, les données des radars météorologiques, servies comme un WMS via GeoMet-Météo.

Deux couches GeoMet-Météo sont utilisées pour créer cette animation : `RADAR_1KM_RRAI` et `RADAR_COVERAGE_RRAI.INV`. Ces couches sont disponibles sur une fenêtre mobile de 3 heures, toutes les 6 minutes.

### HTML

```html
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    #map {
      width: 100%;
      height: 400px;
    } 
  </style>
  <title>Couche temporelle de GeoMet animée avec OpenLayers</title>
  <meta name="description" content="Exemple de GeoMet avec OpenLayers">
  <meta name="author" content="CCMEP">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v7.3.0/ol.css" type="text/css"/>
  <script src="https://cdn.jsdelivr.net/npm/ol@v7.3.0/dist/ol.js"></script>
</head>

<body>
  <div id="map"></div>
  <div id="controller" role="group" aria-label="Animation controls" style="background: #ececec; padding: 0.5rem;">
    <button id="fast-backward" class="btn btn-primary btn-sm" type="button"><i class="fa fa-fast-backward" style="padding: 0rem 1rem"></i></button>
    <button id="step-backward" class="btn btn-primary btn-sm" type="button"><i class="fa fa-step-backward" style="padding: 0rem 1rem"></i></button>
    <button id="play-pause" class="btn btn-primary btn-sm" type="button"><i class="fa fa-play" style="padding: 0rem 1rem"></i></button>
    <button id="step-forward" class="btn btn-primary btn-sm" type="button"><i class="fa fa-step-forward" style="padding: 0rem 1rem"></i></button>
    <button id="fast-forward" class="btn btn-primary btn-sm" type="button"><i class="fa fa-fast-forward" style="padding: 0rem 1rem"></i></button>
    <span id="info" style="padding-left: 0.5rem;"></span>
  </div>

  <script src="./tutorial.js"></script>
</body>
</html>
```

Tout comme les exemples précédents, le HTML ci-dessus charge les bibliothèques JavaScript et CSS OpenLayers, ainsi que les CSS Bootstrap et Font Awesome utilisés pour afficher les différents boutons dans le contrôleur d'animation. Un conteneur supplémentaire `controller` est créé sous la carte et contient les boutons fast-backward, step-backward, play-pause, step-forward et fast-forward, ainsi qu'un élément `<span>` utilisé pour afficher le pas de temps actuellement affiché.

### JavaScript

```javascript
/* Nom du fichier : tutorial.js */

const parser = new DOMParser();

// Fonction asynchrone utilisée pour récupérer l'heure de début et de fin du document GetCapabilities de la couche RADAR_1KM_RRAI
async function getRadarStartEndTime() {
  let response = await fetch('https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&request=GetCapabilities&version=1.3.0&LAYERS=RADAR_1KM_RRAI&t=' + new Date().getTime())
  let data = await response.text().then(
    data => {
      let xml = parser.parseFromString(data, 'text/xml');
      let [start, end] = xml.getElementsByTagName('Dimension')[0].innerHTML.split('/');
      let default_ = xml.getElementsByTagName('Dimension')[0].getAttribute('default');
      return [start, end, default_];
    }
  )
  return [new Date(data[0]), new Date(data[1]), new Date(data[2])];
}

let frameRate = 1.0;
let animationId = null;
let startTime = null;
let endTime = null;
let defaultTime = null;
let currentTime = null;

let layers = [
  new ol.layer.Tile({
    source: new ol.source.OSM()
  }),
  new ol.layer.Image({
    source: new ol.source.ImageWMS({
      format: 'image/png',
      url: 'https://geo.weather.gc.ca/geomet/',
      params: {'LAYERS': 'RADAR_1KM_RRAI', 'TILED': true},
      crossOrigin: 'Anonymous'
    })
  }),
  new ol.layer.Image({
    source: new ol.source.ImageWMS({
      format: 'image/png',
      url: 'https://geo.weather.gc.ca/geomet/',
      params: {'LAYERS': 'RADAR_COVERAGE_RRAI.INV', 'TILED': true},
      transition: 0,
      crossOrigin: 'Anonymous'
    })
  })
];

let map = new ol.Map({
  target: 'map',
  layers: layers,
  view: new ol.View({
    center: ol.proj.fromLonLat([-97, 57]),
    zoom: 3
  })
});

// Si l'image n'a pas pu load à cause d'un changement dans la plage de temps, récupérer la nouvelle plage de temps
layers[1].getSource().on("imageloaderror", () => {
  getRadarStartEndTime().then(data => {
    currentTime = startTime = data[0];
    endTime = data[1];
    defaultTime = data[2];
    updateLayers();
    updateInfo();
    updateButtons();
  })
});

function updateLayers() {
  layers[1].getSource().updateParams({'TIME': currentTime.toISOString().split('.')[0]+"Z"});
  layers[2].getSource().updateParams({'TIME': currentTime.toISOString().split('.')[0]+"Z"});
}

function updateInfo() {
  let el = document.getElementById('info');
  el.innerHTML = `Time / Heure: ${currentTime.toISOString().substr(0, 16)+"Z"}`
}

// Activer/désactiver les boutons dépendemment de l'état de la map
function updateButtons() {
  if (animationId !== null) {
    disableButtons([fastBackwardButton, stepBackwardButton, stepForwardButton, fastForwardButton]);
    enableButtons([playPauseButton]);
  } else {
    if (currentTime <= startTime) {
      disableButtons([fastBackwardButton, stepBackwardButton]);
      enableButtons([playPauseButton, stepForwardButton, fastForwardButton]);
    } else if (currentTime >= endTime) {
      disableButtons([playPauseButton, stepForwardButton, fastForwardButton]);
      enableButtons([fastBackwardButton, stepBackwardButton]);
    } else {
      enableButtons([fastBackwardButton, stepBackwardButton, playPauseButton, stepForwardButton, fastForwardButton]);
    }
  }
}
  
function disableButtons(buttons) {
  for (var i = 0; i < buttons.length; i++){
    buttons[i].disabled = true;
  }
}

function enableButtons(buttons) {
  for (var i = 0; i < buttons.length; i++){
    buttons[i].disabled = false;
  }
}

function setTime() {
  if (currentTime >= endTime) {
    currentTime = endTime;
    togglePlayPause();
  } else {
    currentTime = new Date(currentTime);
    currentTime.setUTCMinutes(currentTime.getUTCMinutes() + 6);
  }
  updateLayers();
  updateInfo();
}

function togglePlayPause() {
  if (animationId !== null) {
    playPauseButton.firstElementChild.className = "fa fa-play"
    window.clearInterval(animationId);
    animationId = null;
    updateButtons();
  } else {
    playPauseButton.firstElementChild.className = "fa fa-pause"
    animationId = window.setInterval(setTime, 1000 / frameRate);
    updateButtons();
  }
}

function fastBackward() {
  if (animationId == null && currentTime > startTime) {
    getRadarStartEndTime().then(data => {
      currentTime = startTime = data[0];
      endTime = data[1];
      defaultTime = data[2];
      updateLayers();
      updateInfo();
      updateButtons();
    })
  }
}

function stepBackward() {
  if (animationId == null && currentTime > startTime) {
    currentTime = new Date(currentTime);
    currentTime.setUTCMinutes(currentTime.getUTCMinutes() - 6);
    if (currentTime.getTime() === startTime.getTime()) {
      getRadarStartEndTime().then(data => {
        currentTime = startTime = data[0];
        endTime = data[1];
        defaultTime = data[2];
        updateLayers();
        updateInfo();
        updateButtons();
      })
    }
    else {
      updateLayers();
      updateInfo();
      updateButtons();
    }
  }
}

function stepForward() {
  if (animationId == null && currentTime < endTime) {
    currentTime = new Date(currentTime);
    currentTime.setUTCMinutes(currentTime.getUTCMinutes() + 6);
    updateLayers();
    updateInfo();
    updateButtons();
  }
}

function fastForward() {
  if (animationId == null && currentTime < endTime) {
    currentTime = new Date(endTime);
    updateLayers();
    updateInfo();
    updateButtons();
  }
}

let fastBackwardButton = document.getElementById('fast-backward');
fastBackwardButton.addEventListener('click', fastBackward, false);

let stepBackwardButton = document.getElementById('step-backward');
stepBackwardButton.addEventListener('click', stepBackward, false);

let playPauseButton = document.getElementById('play-pause');
playPauseButton.addEventListener('click', togglePlayPause, false);

let stepForwardButton = document.getElementById('step-forward');
stepForwardButton.addEventListener('click', stepForward, false);

let fastForwardButton = document.getElementById('fast-forward');
fastForwardButton.addEventListener('click', fastForward, false);

// Initialiser la map
function initMap() {
  getRadarStartEndTime().then(data => {
    startTime = data[0];
    endTime = data[1];
    currentTime = defaultTime = data[2];
    updateLayers();
    updateInfo();
    updateButtons();
  })
}
initMap();
```

Dans le code JavaScript, une fonction asynchrone est créée pour récupérer l'heure de début, l'heure de fin et l'heure par défaut actuellement disponible pour les données du radar météorologique (`RADAR_1KM_RRAI`). Lorsqu'une réponse est reçue, le `DOMParser()` est utilisé pour récupérer le contenu de la balise GetCapabilities `<Dimension>` et renvoie un tableau contenant trois objets date-heure représentant l'heure de début, l'heure de fin et l'heure par défaut des données radar météo disponibles.

Tout comme les autres exemples d'OpenLayers ci-dessus, un ensemble de couches est défini et transmis au constructeur de l'`ol.Map`.

La plage de temps (i.e. startTime et endTime) couverte par les couches se met régulièrement à jour, ce qui fait en sorte qu'il peut arriver qu'une image ne puisse pas être chargée car les données d'un pas de temps expiré ne sont plus disponibles. La situation est identifée quand une couche lance un événement `imageloaderror`, et la fonction asynchrone est appelée à nouveau pour récupérer l'heure de début, l'heure de fin et l'heure par défaut mises à jour. La fonction asynchrone est également appelée à chaque fois que l'utilisateur va au début de la plage de temps (via les boutons `fastBackward()` et `stepBackward()`), afin de mettre à jour la plage de temps.

La fonction `updateButtons()` modifie les balises HTML des boutons afin de les désactiver/réactiver dépendemment de l'état de la map. Par exemple, les boutons fast-backward, step-backward, step-forward et fast-forward sont désactivés lorsque l'animation de la map est activée.

La fonction `setTime()` est utilisée pour augmenter l'heure actuelle de 6 minutes afin de de récupérer le pas de temps disponible suivant. Si l'heure actuelle est supérieure ou égale à l'heure de fin, la fonction `togglePlayPause()` est appelée pour arrêter l'animation. 

La fonction `togglePlayPause()` permet d'alterner entre le bouton play et pause dépendemment de l'état de la map. Lorsque l'animation est activée, le bouton prend l'apparence d'un bouton pause et son action permet de désactiver l'animation. Lorsque l'animation est désactivée, le bouton prend l'apparence d'un bouton play et son action permet d'appeler `setTime()` à un intervalle régulier, de manière à augmenter continuellement le pas de temps. 

Les fonctions `fastBackward()`, `stepBackward()`, `stepForward()` et `fastForward()` permettent respectivement d'aller à l'heure du début, au pas de temps précédent, au pas de temps suivant, et à l'heure de fin. Chaque bouton appelle les fonctions `updateLayers()`, `updateInfo()` et `updateButtons()` afin de mettre à jour les couches et le temps affiché, ainsi que désactiver les boutons appropriés. Les boutons du HTML sont ensuite associés à leur fonction respective à l'aide de Event Listeners.

Enfin, la map est initialisée en appelant `getRadarStartEndTime()` pour définir les variables startTime, endTime, defaultTime et currentTime.

Voir l'exemple ci-dessous :

<iframe height="300" style="width: 100%;" scrolling="no" title="Exemple de couche WMS avec composante temporelle et OpenLayers" src="https://codepen.io/eccc-msc/embed/NWGdVRp?height=265&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
Voir le "Pen" <a href='https://codepen.io/eccc-msc/pen/NWGdVRp'>GeoMet WMS Time Openlayers Example</a> par le SMC d'ECCC 
(<a href='https://codepen.io/eccc-msc'>@eccc-msc</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>