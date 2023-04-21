[In English](readme_en.md)

![ECCC logo](../img_eccc-logo.png)

[TdM](../readme_fr.md) > GeoMet du SMC


# GeoMet du SMC

La plateforme GeoMet du SMC rend publiquement accessible les données du Service météorologique du Canada (SMC) et d'Environnement et Changement climatique Canada (ECCC) via des services web interopérables et des interfaces de programme (API). Par le biais de standards ouverts, ces services donnent rapidement et gratuitement accès à des milliers de jeux de données et produits météorologiques, climatiques et hydrométriques en temps réel et archivés qui peuvent être intégrés dans les applications spécifiques de l'usager et leurs systèmes d'aide à la décision. Les usagers peuvent développer des applications mobiles, créer des cartes interactives en-ligne, ainsi que de visualiser et animer les données du SMC dans des logiciels de bureau. Les services GeoMet du SMC rendent également possible le découpage de données et la reprojection sur demande, tout autant que la conversion de formats et la visualisation personnalisée de couches de données.


## Utilisation et documentation technique

Aperçu, exemples et tutoriels pour accéder et utiliser les données ouvertes de GeoMet du SMC :

* [Aperçu de l'utilisation](../usage/readme_fr.md)
* Tutoriels :
    * Utiliser les données dans le logiciel de bureau QGIS :
        * [Ajouter, effectuer des requêtes et animer des couches WMS](../usage/tutorial_WMS_QGIS_fr.md)
        * [Ajouter et effectuer des requêtes aux couches OGC API Features](../usage/tutorial_OAFeat_QGIS_fr.md)
        * [Ajouter des données brutes](../usage/tutorial_raw-data_QGIS_fr.md)
    * [Créer des cartes interactives sur le web avec OpenLayers et Leaflet](../usage/tutorial_web-maps_fr.md) :
        * Ajouter des couches
        * Afficher des boîtes de dialogue
        * Animer des couches temporelles
* Cas d'utilisation :
    * [Arthur : profits anticipés selon la probabilité de précipitation](../../usage/use-case_arthur/use-case_arthur_fr/):
        * Accéder et utiliser l'API GeoMet du SMC directement dans un script Python, spécifiquement le standard OGC Web Map Service (WMS) pour créer des tables et graphiques
    * [Cathy : suivre les niveaux d'eau aux stations hydrométriques](../../usage/use-case_oafeat/use-case_oafeat-script_fr/):
        * Accéder et utiliser l'API GeoMet du SMC directement dans un script Python, spécifiquement le standard OGC API - Features (OAFeat) pour créer des séries temporelles et cartes interactives
* Documentation technique :
    * [Documentation technique des services web géospatiaux / API](web-services_fr.md)
* [Licence d'utilisation finale](../licence/readme_fr.md)
* [Politique d'utilisation des services](../usage-policy/readme_fr.md)

## Accès

L'accès aux services GeoMet du SMC est anonyme et gratuit. Ces services doivent être accédés via un logiciel qui supporte les services web géospatiaux. Les services web géospatiaux supportés sont les standards de l'Open Geospatial Consortium (OGC) suivants : [Web Map Service (WMS)](https://www.opengeospatial.org/standards/wms), [Web Coverage Service (WCS)](https://www.opengeospatial.org/standards/wcs), [OGC API - Features](https://ogcapi.ogc.org/features/) et [OGC API - Coverages](https://ogcapi.ogc.org/coverages/) .

La plateforme GeoMet du SMC comprend les services suivants :

* GeoMet-OGC-API :
    * Données météorologiques, climatiques et hydrométriques
    * Standards supportés : OGC API - Features, OGC API - Coverages, OGC API - Processes, STAC (expérimental)
* GeoMet-Météo :
    * Systèmes de prévision numérique, radar météorologique, conditions actuelles, alertes, etc.
    * Standards supportés : WMS, WCS, SLD
* GeoMet-Climat :
    * Archives de données climatiques, simulations et scénarios
    * Standards supportés : WMS, WCS, SLD

Les [pages des jeux de données disponibles](../msc-data/readme_fr.md) précisent sur quel service de GeoMet du SMC les données correspondantes sont disponibles.

### GeoMet-OGC-API

GeoMet-OGC-API donne accès aux données d'Environnement et Changement climatique Canada (ECCC) et du Service météorologique du Canada (SMC) par le biais des standards émergeants [OGC API - Features](https://ogcapi.ogc.org/features/) et [OGC API - Coverages](https://ogcapi.ogc.org/coverages/) de l'Open Geospatial Consortium (OGC).

Accès à GeoMet-OGC-API :

* [https://api.meteo.gc.ca/](https://api.meteo.gc.ca/)
* Le [générateur de requêtes OpenAPI de GeoMet-OGC-API](https://api.meteo.gc.ca/openapi?f=html)

Le code source de GeoMet-OGC-API est publiquement disponible sur GitHub :

* msc-pygeoapi : [https://github.com/ECCC-MSC/msc-pygeoapi](https://github.com/ECCC-MSC/msc-pygeoapi)
* pygeoapi : [https://pygeoapi.io/](https://pygeoapi.io/)

### GeoMet-Météo

GeoMet-Météo donne accès aux données météorologiques, hydriques et environnementales du Service météorologique du Canada (SMC) par le biais de services web interopérables. Ce service donne accès aux données telles que les alertes météorologiques, les prévisions publiques, les observations ainsi que les données de modèles de prévision numérique du temps.

Capacités de ce service :

* L'URL WMS de GeoMet-Météo : [https://geo.meteo.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities](https://geo.meteo.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities)
* L'URL WCS de GeoMet-Météo : [https://geo.meteo.gc.ca/geomet?lang=fr&service=WCS&version=2.0.1&request=GetCapabilities](https://geo.meteo.gc.ca/geomet?lang=fr&service=WCS&version=2.0.1&request=GetCapabilities)

Conseil d'utilisation :

* Les usagers sont invités à utiliser `&layer=` dans leurs requêtes WMS GetCapabilities afin de pointer sur une couche spécifique et récupérer une réponse plus petite contenant les dimensions temporelles à jour
    * Exemple pour la couche de la composite radar météo de neige à 1km : [https://geo.meteo.gc.ca/geomet?service=WMS&version=1.3.0&request=GetCapabilities&layer=RADAR_1KM_RSNO](https://geo.meteo.gc.ca/geomet?service=WMS&version=1.3.0&request=GetCapabilities&layer=RADAR_1KM_RSNO)

### GeoMet-Climat

GeoMet-Climat donne accès aux données d'Environnement et Changement climatique Canada (ECCC) via des services web interopérables. Ce service donne accès aux données climatiques historiques tels que les données climatiques quotidiennes, les sommaires climatiques mensuels et les normales climatiques pour les stations climatiques à travers le pays. GeoMet-Climat est une source de données pour le [Centre Canadien des Services Climatiques](https://www.canada.ca/fr/environnement-changement-climatique/services/changements-climatiques/centre-canadien-services-climatiques.html).

Capacités de ce service :

* L'URL WMS de GeoMet-Climat : [https://geo.meteo.gc.ca/geomet-climate?service=WMS&version=1.3.0&request=GetCapabilities&lang=fr](https://geo.meteo.gc.ca/geomet-climate?service=WMS&version=1.3.0&request=GetCapabilities&lang=fr)
* L'URL WCS de GeoMet-Climat : [https://geo.meteo.gc.ca/geomet-climate?service=WCS&version=2.0.1&request=GetCapabilities&lang=fr](https://geo.meteo.gc.ca/geomet-climate?service=WCS&version=2.0.1&request=GetCapabilities&lang=fr)

Le code source de GeoMet-Climat et de l'Outil d'extraction de données climatiques est publiquement disponible sur GitHub :

* [https://github.com/ECCC-CCCS/geomet-climate](https://github.com/ECCC-CCCS/geomet-climate)
* [https://github.com/ECCC-CCCS/climate-data-extraction-tool](https://github.com/ECCC-CCCS/climate-data-extraction-tool)

### SpatioTemporal Asset Catalog

Le support expérimental de la [spécification SpatioTemporal Asset Catalog (STAC)](https://github.com/radiantearth/stac-spec) est disponible pour le contenu du [Datamart du SMC](../msc-datamart/readme_fr.md).

* L'URL expérimental de STAC : [https://api.meteo.gc.ca/stac/](https://api.meteo.gc.ca/stac/)

## Liste d'information

Nous encourageons les usagers à s'abonner à la liste d'information [GeoMet-Info](https://lists.ec.gc.ca/cgi-bin/mailman/listinfo/geomet-info) afin d'être informés des améliorations et changements aux services GeoMet du SMC.


## Support

Les services GeoMet du SMC sont opérationnels 24/7. Le support aux usagers est offert sur la base du meilleur effort durant les heures de travail normales. Les usagers désirant du support sont invités à [communiquer avec nous](https://meteo.gc.ca/mainmenu/contact_us_f.html).
