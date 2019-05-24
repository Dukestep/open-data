[En français](readme_fr.md)

![ECCC logo](../img_eccc-logo.png)

[TOC](../readme_en.md) > MSC GeoMet


# MSC GeoMet

The MSC GeoMet services provide public access to the Meteorological Service of Canada (MSC) and Environment and Climate Change Canada (ECCC) data via interoperable web services and application programming interfaces (API). Through open standards, users can freely and quickly access thousands of meteorological datasets and products and integrate them in their domain-specific applications and decision support systems. Users can build mobile apps, create interactive web maps, and display and animate MSC data in desktop software. MSC GeoMet also enables on-the-fly raw data clipping and reprojection, on-the-fly format conversion and custom visualization.

## Access

Access to the MSC GeoMet services is anonymous and free of charge. These services must be accessed with software that supports geospatial web services.

### GeoMet-Weather

GeoMet-Weather provides public access to the Meteorological Service of Canada (MSC) weather, 
 and environmental data via interoperable web services. It provides access to data such as weather alerts and public forecasts, observations and numerical weather prediction forecasts.

Service capabilities:
* GeoMet-Weather WMS URL: https://geo.weather.gc.ca/geomet?lang=en&service=WMS&request=GetCapabilities
* GeoMet-Weather WCS URL: https://geo.weather.gc.ca/geomet?lang=en&service=WCS&request=GetCapabilities
* GeoMet-Weather WFS URL: https://geo.weather.gc.ca/geomet?lang=en&service=WFS&request=GetCapabilities

### GeoMet-Climate

GeoMet-Climate provides public access to Environment and Climate Change Canada (ECCC) climate data via interoperable web services. It provides access to historical climate datasets such daily observation data, monthly summaries and climate normals for climate stations across the country. The GeoMet-Climate services are a data source for the [Canadian Centre for Climate Services](https://canada.ca/climate-services).

Service capabilities:
* GeoMet-Climate WMS URL: https://geo.weather.gc.ca/geomet-climate?service=WMS&request=GetCapabilities
* GeoMet-Climate WCS URL: https://geo.weather.gc.ca/geomet-climate?service=WCS&request=GetCapabilities

The source code for GeoMet-Climate and the Climate Data Extraction Tool is publicly available on GitHub:
* https://github.com/ECCC-CCCS/geomet-climate
* https://github.com/ECCC-CCCS/climate-data-extraction-tool

### GeoMet-Features service

GeoMet-Features provides public access to the Meteorological Service of Canada (MSC) and Environment and Climate Change Canada (ECCC) data via the emerging [Open Geospatial Consortium (OGC) Web Feature Service (WFS) 3.0 standard](https://github.com/opengeospatial/WFS_FES). It provides access to hydrometric and climate data.

Service capabilities:
* GeoMet-Features WFS3 URL: https://geo.weather.gc.ca/geomet/features/?f=html

### GeoMet-Beta

GeoMet-Beta provides access to experimental and other non-operational data. This service is not operational.

Service capabilities:
* GeoMet-Beta WMS URL: https://geo.weather.gc.ca/geomet-beta?lang=en&service=WMS&request=GetCapabilities
* GeoMet-Beta WCS URL: https://geo.weather.gc.ca/geomet-beta?lang=en&service=WCS&request=GetCapabilities
* GeoMet-Beta WFS URL: https://geo.weather.gc.ca/geomet-beta?lang=en&service=WFS&request=GetCapabilities


## Usage

Information on using these services and examples are available on the [how-to page](../how-to/readme_en.md).


## Announcement mailing list

We encourage users to subscribe to the [GeoMet-Info](https://lists.ec.gc.ca/cgi-bin/mailman/listinfo/geomet-info) announcement mailing list to be informed of enhancements and changes to the MSC GeoMet services.


## Support

The MSC GeoMet services are operational 24/7. User support is provided on a best effort basis during normal business hours. Users requesting support are invited to [contact us](http://www.weather.gc.ca/mainmenu/contact_us_e.html).