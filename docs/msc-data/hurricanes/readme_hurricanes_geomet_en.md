[En français](readme_hurricanes_geomet_fr.md)

![ECCC logo](../../img_eccc-logo.png)

[TOC](../../readme_en.md) > [MSC data](../readme_en.md) > [Hurricanes](readme_hurricanes_en.md) > Hurricane data on MSC GeoMet

# Hurricane prediction data available on MSC GeoMet

MSC GeoMet provides access to several hurricane prediction layers. Users can build mobile apps, create interactive web maps, and display and animate hurricane prediction layers in desktop software.


## Access to the geospatial web services

The hurricane prediction layers are [available on GeoMet-Weather via the Web Map Service (WMS) standard](../../msc-geomet/readme_en.md).

Example of a web map displaying the hurricane response zone and active hurricanes Web Map Service (WMS) layers, along with weather alerts and precipitation layers, served by MSC GeoMet:

<div id="map" style="height: 400px; position: relative">
  <div id="legend-popup">
  <div id="legend-popup-content">
    <img id="legend-img" src="https://geo.weather.gc.ca/geomet?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=HURRICANE_RESPONSE_ZONE&format=image/png&STYLE=HURRICANE_LINE_BLACK_DASHED"/>
  </div>
</div>
</div>
<div id="controller" role="group" aria-label="Animation controls" style="background: #ececec; padding: 0.5rem;">
  <button id="fast-backward" class="btn btn-primary btn-sm" type="button"><i class="fa fa-fast-backward" style="padding: 0rem 1rem"></i></button>
  <button id="step-backward" class="btn btn-primary btn-sm" type="button"><i class="fa fa-step-backward" style="padding: 0rem 1rem"></i></button>
  <button id="play-pause" class="btn btn-primary btn-sm" type="button"><i class="fa fa-play" style="padding: 0rem 1rem"></i></button>
  <button id="step-forward" class="btn btn-primary btn-sm" type="button"><i class="fa fa-step-forward" style="padding: 0rem 1rem"></i></button>
  <button id="fast-forward" class="btn btn-primary btn-sm" type="button"><i class="fa fa-fast-forward" style="padding: 0rem 1rem"></i></button>
  <button id="exportmap" class="btn btn-primary btn-sm" type="button"><i class="fa fa-download" style="padding: 0rem 1rem"></i></button>
  <a id="image-download" download="msc-geomet_web-map_export.png"></a>
  <span id="info" style="padding-left: 0.5rem;cursor: pointer;"></span>
</div>


## Usage

The [usage overview page](../../usage/readme_en.md) provides generic information on using these services with desktop software, mobile apps, interactive web maps and direct access. Please refer to the [tutorials and technical documentation on MSC GeoMet geospatial web services](../../msc-geomet/readme_en.md) for detailed information. See also the [main hurricane prediction data page](readme_hurricanes_en.md) which links to additional information on hurricane data and products.

### Available layers

There are five main hurricane prediction layers, four of which are the active hurricanes layers:

* Hurricane Response Zone, ID: `HURRICANE_RESPONSE_ZONE`
* Active Hurricanes layers:
    * Hurricane Forecast Location, ID: `HURRICANE_CENTRE`
    * Hurricane Line Segments, ID: `HURRICANE_LINE`
    * Hurricane Track Forecast Error, ID: `HURRICANE_ERR`
    * Hurricane Wind Forecast Wind Radii, ID: `HURRICANE_RAD`


### Usage tips

WMS styles:

* In addition to the default WMS style, several alternative WMS styles with different color scales are available. The list of available WMS styles is provided in the WMS GetCapabilities response ([example of a WMS GetCapabilities request](https://geo.weather.gc.ca/geomet?service=WMS&version=1.3.0&request=GetCapabilities&layer=HURRICANE_RESPONSE_ZONE))
* Furthermore, users can request layers with their own custom styles with the Styled Layer Descriptor (SLD) standard, please refer to the [SLD technical documentation](../../../msc-geomet/wms_en#handling-styles)

Legends:

* Legends are available for every WMS style. Details are provided in [the WMS legend technical documentation](../../../msc-geomet/wms_en#wms-getlegendgraphic)
* Legend retrieval request example: `https://geo.weather.gc.ca/geomet?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=HURRICANE_RESPONSE_ZONE&format=image/png&STYLE=HURRICANE_LINE_BLACK_DASHED`

![The HURRICANE_LINE_BLACK_DASHED WMS legend](https://geo.weather.gc.ca/geomet?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=HURRICANE_RESPONSE_ZONE&format=image/png&STYLE=HURRICANE_LINE_BLACK_DASHED)

## Support

The MSC GeoMet services are operational 24/7. User support is provided on a best-effort basis during normal business hours. If you have any questions about these services, please [contact us](https://weather.gc.ca/mainmenu/contact_us_e.html).


## Announcement mailing list

We encourage users to subscribe to the [GeoMet-Info](https://comm.collab.science.gc.ca/mailman3/postorius/lists/geomet-info/) announcement mailing list to be informed of enhancements and changes to the MSC GeoMet services.

<style>
  #legend-img {
    margin: 0px;
  }
  #legend-popup {
    position: absolute;
    top: 40px;
    right: 8px;
    z-index: 2;
  }
  .legend-switch{
    top: 8px;
    right: .5em;
  }
  .ol-touch .legend-switch {
    top: 80px;
  }
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v7.3.0/ol.css" type="text/css"/>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
<script src="https://cdn.jsdelivr.net/npm/ol@v7.3.0/dist/ol.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js"></script>
<script>
    function isIE() {
      return window.navigator.userAgent.match(/(MSIE|Trident)/);
    }
    var head = document.getElementsByTagName('head')[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    if (isIE())
    {
        js.src = "../../../js/hurricane_ie.js";
        document.getElementById("controller").setAttribute("hidden", true);
    }
    else
    {
        js.src = "../../../js/hurricane.js";
    }
    head.appendChild(js);
</script>