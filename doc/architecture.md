---
title: LugBench-Website Architecture
menu:
- title: Documentation
  href: /doc
  class: documentation button button-green align-right
---

## Homepage
The homepage is located at `http://lugbench_url/gpus`.

## Project architecture

### Configuration

The project contains some configuration files.
Here is the list.

Files          | Description
-------------- | --------------------------------------------------------------------------
package.json   | The definition of dependencies, used by `npm` when installing the project.
gulpfile.js    | Configuration of different Gulp tasks.
tsconfig.json  | TypeScript configuration file.
tslint.json    | TypeScript linter configuration file.
conf/\*.js     | Configuration of additional modules used by the project.

### Sources

All the sources files are located in the `src` folder.
The initialization page is located at the root of this `src` folder.
Then, all the components and models are located in the `src/app` folder.
