[En français](changelog_nowcasting_fr.md)

![ECCC logo](../../img_eccc-logo.png)

[TOC](../../readme_en.md) > [MSC data](../readme_en.md) > [Nowcasting](readme_nowcasting_en.md) > Nowcasting Changelog

# Chronology of changes to the Integrated Nowcasting System (INCS)

## Thursday March 23, 2023

### Upgrade to version 2.1.0 of the INCS to incorporate S-band radar data over Canada

On Thursday March 23th, 2023, starting with the 1200 UTC run, the Canadian Meteorological Centre (CMC) of the Meteorological Service of Canada (MSC) proceeded with an update to version 2.1.0 of the Integrated NowCasting System (INCS).

The changes included in this upgrade are summarized as follows :

* Introduction and processing of the new S-band radar data 
* Adjustment to the code to ensure a more reliable access to radar data files
* A modified approach to create the internally produced comporad file. This file is now produced using newly available grids of radar derived data which allows this system to now be less dependant on the CaPA qperad module used in previous versions of INCS.
* Since January 4 2023, cloud information derived from GOES 18 (GOES west) satellite data is used. Cloud information derived from the GOES 16 (GOES east) satellite is still in place.

The official note announcing this change is available at [this link](https://dd.meteo.gc.ca/doc/genots/2023/03/23/NOCN03_CWAO_231325___11843)

A technical note with more details is available at [this link](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/tech_notes/technote_rdps-incs-210_e.pdf) 

## Tuesday June 28, 2022

### Upgrade to Version 1.10.0 of the INCS adapted to the New High Performance Computing Infrastructure.

See details [at this link](../changelog_multisystems_en.md).

## Wednesday December 1st, 2021

#### Upgrade to Version 1.9.0 of the Integrated NowCasting System (INCS) at the Canadian Meteorological Centre

On Wednesday December 1st, 2021, starting with the 1200 UTC run, the Canadian Meteorological Centre (CMC) will upgrade the Integrated NowCasting System (INCS) to version 1.9.0.

The changes included in this upgrade are summarized as follows :

* The mechanisms of RDPS INCS run using RDPS 8.0.0 and RDPS UMOS data
* The system improves its cloud models by using the more appropriate GOES 16/17 cloud data
* System now uses Cloud Fraction (CF)

The official note announcing the implementation of these changes is available [at this link](http://dd.meteo.gc.ca/doc/genots/2021/11/26/NOCN03_CWAO_262118___50159).

A technical note with more details on INCS v1.9.0 is available [at this link](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/tech_notes/technote_rdps-incs-190_e.pdf).

The technical specifications document for INCS v1.9.0 is available [at this link](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/tech_specifications/tech_specifications_RDPS-INCS_1.9.0_e.pdf).

## Tuesday January 21, 2020

### Upgrade to INCS adapted to the New High Performance Computing Infrastructure.

See details [at this link](../changelog_multisystems_en.md)

## Thursday July 9, 2015

### The Canadian Meteorological Centre Upgrades the INCS (Nowcast system) to version 1.5

Starting on July 09, 2015 with the 1400 UTC run the Canadian Meteorological Centre (CMC) will update the Integrated NowCasting System (INCS). This system provides both observation data and very short term forecasts to the Scribe forecast production system. This upgrade improves mainly the quality of the component that processes the radar data of this system.

A copy of the official note describing these changes [is available by clicking here](http://dd.weather.gc.ca/doc/genots/2015/07/08/NOCN03_CWAO_081637___00169).

A technical note with detailed information on this system will be provided shortly.

## Wednesday November 20 2013

### The Canadian Meteorological Centre Upgrades the INCS (Nowcasting) to version 1.4

Starting on August 20 2013 with the 1400 UTC run the Canadian Meteorological Centre (CMC) will update the Integrated NowCasting System (INCS). This system provides both observation data and very short term forecasts to the Scribe forecast production system. This upgrade, which now integrates radar observations, brings the system version from 1.1 to version 1.4.

The following changes were made to the system:

1) Integration of the radar observations data in the form of North-America URP composite with 4 km resolution based on the PRECIP-ET product.

2) Cleaning of radar data with a cloud mask (satellite and NT field from the regional deterministic prediction system - RDPS) and statistical processing.

3) Extrapolation of observed radar data with the MAPLE (McGill Algorithm for Precipitation Lagrangian Extrapolation, REF. McGill University's Research centre on Atmospheric Remote Sensing) Algorithm.

4) Replacement of the extrapolation lightning algorithm (Ouellet-Price) by the MAPLE motion vector field.

5) Integration of the probability of precipitation occurrence field forecast by MAPLE at 4 km.

6) Application of a sampling method to produce a probability of lightning (POL) field from the lightning density observed and forecast.

7) Integration of the probability of precipitation field generated by sampling method applied to the hourly QPF field of the regional deterministic prediction system - RDPS.
Overall, the verification results have clearly showed improvements for first 6 hours of the forecast.

A copy of the official note describing these changes [is available by clicking here](http://dd.weather.gc.ca/doc/genots/2013/11/15/NOCN03_CWAO_151902___00907).

A technical note with detailed information on this system: [Technical Note of INCS 1.4](https://collaboration.cmc.ec.gc.ca/cmc/cmoi/product_guide/docs/lib/technote_incs_20140502_e.pdf)


## Tuesday August 7 2012

### The Canadian Meteorological Centre Upgrades its INCS (Nowcasting) to version 1.1

Starting on August 7 2012 with the 1400 UTC run the Canadian Meteorological Centre (CMC) will update its Integrated NowCasting System (INCS). This system provides both obervation data and very short term forecasts to the Scribe forecast production system. With this upgrade the system version number goes from 1.0 to 1.1.

The following changes were made to the system:

1) Integration into the incs of the dew point temperature produced by the umos statistical system.

2) The system of rules governing the forecast of cloud opacity and visibility was improved.

The rules that generate the INCS dew point temperature forecast will now use the UMOS dew point instead of that from the regional deterministic prediction system (RDPS) and this for all stations where the umos dew point is produced. Verification results on the dew point show significant better performance when comparing version 1.1 to to version 1.0. with this change. We anticipate in particular a positive impact on the ability to forecast fog.

Modifications done to the rules related to the forecast of the cloud opacity have improved the performance of the system for this weather element, especially for the period from 4 to 12 hours after the beginning of the run.

Finally, some adjustments to the rules for visibility forecast have allowed to improve visibility values in falling snow for instance.

A copy of the official note describing these changes [is available by clicking here](http://dd.weather.gc.ca/doc/genots/2012/07/31/NOCN03_CWAO_312128___01022).
