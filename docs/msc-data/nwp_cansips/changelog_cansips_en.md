[En français](changelog_cansips_fr.md)

![ECCC logo](../../img_eccc-logo.png)

[TOC](../../readme_en.md) > [MSC data](../readme_en.md) > [CanSIPS](readme_cansips_en.md) > CanSIPS Changelog

# Chronology of changes to the Canadian Seasonal to Inter-annual Prediction System (CanSIPS)


## Tuesday June 11, 2024

### Upgrade to Version 3.0.0 of the Canadian Seasonal to Inter-annual Prediction System (CanSIPS) at the Canadian Meteorological Centre

On Tuesday June 11, 2024, starting with the 1200 UTC run, the Canadian Meteorological Centre (CMC) will upgrade the Canadian Seasonal to Inter-annual Prediction System (CanSIPS) to version 3.0.0

Significant changes:

* CanCM4i coupled climate model replaced by CanESM5.1 Earth system model
* GEM-NEMO 5.1 coupled model replaced by GEM-NEMO 5.2
* Ensemble size of the official forecast is doubled (increased from 20 to 40) by combining the last-day of the forecast with forecasts initialized four days prior to it.
* more variables are available to external users via c3s
* In CanESM5, a new runtime atmosphere/ocean bias correction is introduced via tendency adjustment terms        
* Land initial conditions (for realtime forecast) for GEM5.2-NEMO is now obtained form the [Global Deterministic Prediction System (GDPS)](../nwp_gdps/readme_gdps_en.md)  after adjusting to hindcast climatology. In previous version, it was obtained from an offline runs.  


A brief summary of the innovations included in this upgrade and their impact on performance can be consulted in [this document](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/fact_sheets/factsheet_cansips-300_e.pdf). 

A copy of the official note announcing the implementation of these changes is available at [this link](https://dd.meteo.gc.ca/doc/genots/2024/06/10/NOCN03_CWAO_101857___46443).

A technical note with more details on this system is available [at this link](http://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/tech_notes/technote_cansips-300_e.pdf).

The technical specifications document for CanSIPS 3.0.0 is available [at this link](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/tech_specifications/tech_specifications_CANSIPS_3.0.0_e.pdf) .


## Tuesday June 28, 2022

### Upgrade to Version 2.2.0 of the CanSIPS adapted to the New High Performance Computing Infrastructure.

See details [at this link](../changelog_multisystems_en.md)

## Tuesday November 30, 2021

### Upgrade to Version 2.1 of the Canadian Seasonal to Inter-annual Prediction System (CanSIPS) at the Canadian Meteorological Centre

On Tuesday November 30, 2021, the Canadian Meteorological Centre (CMC) will upgrade the Canadian Seasonal to Inter-annual Prediction System (CanSIPS) to version 2.1.

The major changes of CanSIPS in this upgrade can be summarized as follow:

* The GEM-NEMO model version upgraded to GEM 5.1.
* The CanSIPS inputs now comming from upgraded systems GDPS 8.0.0, GEPS 7.0.0 and GIOPS 3.3.0.

A technical note with more details on this change [is available at this link](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/tech_notes/technote_cansips-210_e.pdf).

The technical specifications document for CanSIPS version 2.1 [is available at this link](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/tech_specifications/tech_specifications_CANSIPS_2.1.0_e.pdf).


## Tuesday January 21, 2020

### Upgrade CanSIPS version adapted to the New High Performance Computing Infrastructure.

See details [at this link](../changelog_multisystems_en.md)


## Wednesday July 3, 2019

### Upgrade to Version 2 of the Canadian Seasonal to Inter-annual Prediction System (CanSIPS) at the Canadian Meteorological Centre

On Wednesday July 3rd, 2019, the Meteorological Service of Canada's Canadian Meteorological Centre (CMC) will upgrade the Canadian Seasonal to Inter-annual Prediction System (CanSIPS) to version 2.
The major changes of CanSIPS in this upgrade are in the forecast component:

* The CANCM3 global coupled model is replaced by newer and better performing GEM-NEMO couped model.
* The CANCM4 model is upgraded with improved sea-ice initialisation.


A technical note with more details on this change [is available at this link](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/tech_notes/technote_cansips-v2_20190703_e.pdf).


## Tuesday June 21st, 2016

### Upgrade to the Canadian Seasonal to Inter-annual Prediction System (CanSIPS) at the Canadian Meteorological Centre

On Tuesday June 21st, 2016, the Meteorological Service of Canada's Canadian Meteorological Centre (CMC) will upgrade the Canadian Seasonal to Inter-annual Prediction System (CanSIPS).

In this upgrade the 3D ocean analyses used by the ocean model in CanSIPS will now come from the Global Ice Ocean Prediction System (GIOPS) 2.1 and will replace the NCEP GODAS ocean analyses previously used.

A copy of the official note announcing the implementation of these changes is available [at this link](http://dd.meteo.gc.ca/doc/genots/2016/06/21/NOCN03_CWAO_211910___00716).


## Tuesday July 23 2013

### Adjustments to the ocean temperature analysis (GODAS) feed for CanSIPS

Between July 16 and July 23 the feed of the GODAS analysis into the CanSIPS model was interrupted. A number of actions were undertaken to restore this feed. As a result, access to the (correct) daily GODAS analysis was restored on 23 July, with importation of the correct analyses dated 17-21 July 2013. It was anticipated as of 23 July 2013 that the normal sequence for importing and assimilating GODAS data would resume on 24 July 2013.


## Thursday December 1, 2011

### The Canadian Meteorological Centre starts using CanSIPS: Canadian Seasonal to Inter-annual Prediction System

On Thursday December 1 2011, CMC started issuing forecasts using its CanSIPS system, a newly developed global coupled seasonal prediction system for forecasting monthly to multi-seasonal climate conditions.

With CanSIPS, Environment Canada will be able to issue seasonal climate condition predictions for lead times out to one full year thanks to a seamless physically-based prediction system; this represents substantive progress with respect to the previous system. CanSIPS can also skillfully predict the ENSO phenomenon (El Niño-La Niña/Southern Oscillation) and its influence on the climate up to a year in advance.

The development and the implementation of this multi-seasonal forecast system is the result of a close collaboration between CMC and the Canadian Centre for Climate Modeling and Analysis (CCCma).

By using CanSIPS operationally, Environment Canada maintains its position amongst leading international organizations producing such long-range predictions. MSC is also contributing to the multi-model ensemble forecasts produced by WMO and the APEC Climate Centre.

Initially no additional products will appear on MSC's monthly and seasonal forecast page (see link below) but the accuracy of existing products are now improved by using CanSIPS. Products from CanSIPS will be available on the first day of every month at this web site. New products will be introduced as part of the upcoming phase 2 of this project.

A copy of the official note announcing the start of the operational use of CanSIPS [is available by clicking here](http://dd.weatheroffice.ec.gc.ca/doc/genots/2011/11/28/NOCN03_CWAO_281935___35418).

A technical note providing more detail on the CanSIPS system is available [by clicking here](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/lib/op_systems/doc_opchanges/technote_cansips_20111124_e.pdf)

Information on CanSIPS and its products is also available [at the MSC public web on monthly and seasonal forecasts available by clicking here](https://weather.gc.ca/saisons/index_e.html).

Information is also avaialble in the CMC Product Guide at the following links: [Monthly forecasts page](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/product-pages/image_ens_prog_monthly-temperature-anomalies_gen_e.html) and also on the [Multi-Season forecasts page](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/product-pages/image_ens_prog_seasonal-forecasts_gen_e.html).

