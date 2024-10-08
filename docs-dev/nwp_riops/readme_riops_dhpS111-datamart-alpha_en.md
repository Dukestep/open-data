[En français](readme_riops_dhpS111-datamart-alpha_fr.md)

![ECCC logo](../../docs/img_eccc-logo.png)

# S-111 Dynamic Hydrographic Products(DHP) in HDF5 file format using the Regional Ice Ocean Prediction System (RIOPS) surface currents data. 

This S-111 Dynamic Hydrographic Products(DHP) tiled dataset use the surface currents of the RIOPS oceanographic model. The S-111 tiled data use an open standard [HDF5](https://www.hdfgroup.org/solutions/hdf5/) file format with a specification provided by the [International Hydrographic Organisation(IHO)](https://iho.int). All maritime navigation stakeholders that are interested by the RIOPS surface oceanic currents of the canadian coastal waters can use this [EPSG:4326](https://epsg.io/4326) georeferenced S-111 tiled dataset.

# Data location

MSC testing data repository DD-Alpha data can be [automatically retrieved with the Advanced Message Queuing Protocol (AMQP)](../../docs/msc-datamart/amqp_en.md) as soon as they become available. An [overview and examples to access and use the Meteorological Service of Canada's open data](../../docs/usage/readme_en.md) is also available.

The data can be accessed at the following URL:

* [http://dd.alpha.weather.gc.ca/model_riops/dynamic_hydrographic_products/hdf5/{HH}/](http://dd.alpha.weather.gc.ca/model_riops/dynamic_hydrographic_products/hdf5/)

* __HH__: RIOPS model synoptic forecast run start hour, in UTC [00, 06, 12, 18]

Note that the S-111 data is updated four times a day following the end of each daily RIOPS model synoptic forecast runs instances.

# Files name nomenclature

NOTE: ALL HOURS ARE IN UTC.

The S-111 DHP tiled files have the following nomenclature:

{YYYYYMMDD}T{HH}Z_MSC_RIOPS_111CA002{nnnn}N{wwwww}W.h5

* __YYYYYMMDD__: Year, month and day of a RIOPS model synoptic forecast run starting date.
* __T__: Time character delimiter according to ISO8601 norms.
* __HH__: RIOPS model synoptic run start hour, in UTC [00, 06, 12, 18].
* __Z__: Time zone (UTC).
* __MSC__ : Meteorological Service of Canada identifier, data provider.
* __riops__: RIOPS model identifier.
* __111__: S-111 DHP data identifier.
* __CA__: Canada identifier.
* __002__: Level 2 DHP 1°x1° degrees (2°x1° degrees for latitudes North of 69° N) regular bounding box tiles identifier.
* __nnnn__: Four numeric characters tag used to represent the decimal degrees latitude(Northern Hemisphere) of the South-West corner of each tile bounding box of the dataset.
* __wwwww__: Five numeric characters tag used to represent the decimal degrees longitude(Western Hemisphere) of the South-West corner of each tile bounding box of the dataset.
* __h5__: Official HDF5 file format extension.

Example of a real S-111 DHP tiled file name:

20200129T18Z_MSC_RIOPS_111CA0024200N06900W.h5

This file originates from the Meteorological Service of Canada (MSC) and contains a subset of RIOPS surface currents bounded by a 1x1 degree S-111 DHP tile which have its South-West corner located at latitude 42.00N and longitude 69.00W. The S-111 tiled files were produced by post-processing of RIOPS data results coming from its synoptic forecast run issued on January 29 2020 at 18UTC. 

# List of S-111 variables 

* __surfaceCurrentSpeed__ : Velocity [knots]
* __surfaceCurrentDirection__ : Navigation angle [decimal degrees: 0°-360°]

Both variables are regrouped in a HDF5 data structure of type [HDF5 H5T_COMPOUND type](https://bitbucket.hdfgroup.org/pages/HDFFV/hdf5doc/master/browse/html/cpplus_RM/class_h5_1_1_comp_type.html) for each RIOPS data grid point and for each timestamp.

There is also a comprehensive metadata content in each S-111 tiled data file (for more information on the S-111 metadata, see the official [International Hydrographic Organisation(IHO) specification](http://registry.iho.int/beta/productspec/view.do?idx=168&product_ID=S-111&statusS=5&domainS=ALL&category=product_ID&searchValue=) version 1.0.1.

# Common spatial Reference System(CRS) for GIS GUI applications

* The S-111 tiled files are using the [EPSG:4326](https://epsg.io/4326) as their [CRS](https://docs.qgis.org/2.8/en/docs/gentle_gis_introduction/coordinate_reference_systems.html) to define all the geographical coordinates locations of the RIOPS model grid points as a layer in GIS GUI applications.

# S-111 files internal data structures

* Each S-111 data file is a 1°x1° degrees(2°x1° degrees for latitudes North of 69° N) regular bounding box tiled subset of RIOPS surface currents data.

* The usage of the [EPSG:4326](https://epsg.io/4326) CRS and the data coding format 3 (Ungeorectified gridded data or point set data at one or more times) of the IHO S-111 DHP data specification allows the direct usage, without any interpolation, of RIOPS data which itself use a north-polar stereographic projection with 5km resolution centered at the standard parallel 60° N.

* Each S-111 data file contains 55 timestamped data structures(HDF5 GROUP) called __"timePoint"__ of a subset of RIOPS surface currents data objects of type HDF5 H5T_COMPOUND. The first 6 of those timestamped data structures __"timePoint"__ groups contain the first 6 timestamps of the surface currents data of the previous RIOPS synoptic forecast run and the last 49 of those timestamped data structures __"timePoint"__ groups contain the surface current data of the last RIOPS synoptic forecast run.

# Examples of canadian coastal waters tiled domains available for RIOPS model results.

## 1°x1° degrees tiles bounding boxes for the Bay of Fundy, Scotian shelf and Northumberland Strait.

![PNG Scotian shelf L2 tiles](https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/nwp_riops/dynamic_hydrographic_products/ScotianShelfL2_tiles.png)

## 1°x1° degrees tiles bounding boxes for the Gulf of St. Lawrence

![PNG GStl L2 tiles](https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/nwp_riops/dynamic_hydrographic_products/GSTLL2Tiles.png)

## 1°x1° degrees tiles bounding boxes for the West-Coast (South sector)

![PNG West-Coast L2 tiles](https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/nwp_riops/dynamic_hydrographic_products/WCoastL2Tiles.png)

## 1°x1° degrees tiles bounding boxes for the West-Coast (North sector)

![PNG GStl L2 tiles](https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/nwp_riops/dynamic_hydrographic_products/WCoastNL2Tiles.png)
