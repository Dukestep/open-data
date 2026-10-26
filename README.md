MSC Open Data documentation / Documentation des données ouvertes du SMC: 

# [https://eccc-msc.github.io/open-data/](https://eccc-msc.github.io/open-data/)

## How this repository is published

`en/` and `fr/` are the built sites of [public-doc-en](https://gccode.ssc-spc.gc.ca/ec-msc/public-doc-en) and [public-doc-fr](https://gccode.ssc-spc.gc.ca/ec-msc/public-doc-fr) on GCCode.

1. A merge to `main` in a language repository rebuilds its directory here and commits it to `main`.
2. To make the changes public, run a pipeline on `main` (Build > Pipelines > Run pipeline): it pushes `main` to [ECCC-MSC/open-data](https://github.com/ECCC-MSC/open-data).
3. Publishing a release on GitHub deploys `main` to GitHub Pages.
