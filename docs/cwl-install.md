---
id: cwl-install
title: CWL installation
sidebar_label: CWL installation
---

[![](/data2services/img/CWL_logo.png)](https://www.commonwl.org/)

The [Common Workflow Language](https://www.commonwl.org/) is used to describe workflows to transform heterogeneous structured data (CSV, TSV, RDB, XML, JSON) to the [BioLink](https://biolink.github.io/biolink-model/docs/) RDF data model. The user defines [SPARQL queries](https://github.com/MaastrichtU-IDS/data2services-transform-biolink/blob/master/mapping/pharmgkb/insert-pharmgkb.rq) to transform the generic RDF generated depending on the input data structure (AutoR2RML, xml2rdf) to the target BioLink model.

## Install docker

Install [Docker](https://docs.docker.com/install/) to run the modules. Checkout the [Wiki](https://github.com/MaastrichtU-IDS/data2services-pipeline/wiki/Docker-documentation) if you have issues with Docker installation.

## Install cwltool

Install [cwltool](https://github.com/common-workflow-language/cwltool#install) to get cwl-runner to run workflows of Docker modules.

```shell
apt-get install cwltool
```

- It is recommended to build the Docker images before running workflows, as the `docker pull` might crash when done through `cwl-runner`.
- Following documentation focuses on Linux & MacOS, as no workflow engine supports Windows.
- Windows documentation to run the docker containers can be found [here](https://github.com/MaastrichtU-IDS/data2services-pipeline/wiki/Run-on-Windows).

---

## Clone the repository

Clone the repository with its submodules

```shell
git clone --recursive https://github.com/MaastrichtU-IDS/data2services-transform-biolink.git
```