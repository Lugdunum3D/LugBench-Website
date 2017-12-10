
# LugBench's website (the front-end)

## Dependencies for building LugBench's website
* [NPM](https://www.npmjs.com/): a package manager for JavaScript
* [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* [Gulp](http://gulpjs.com/): Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.
* [Angular2](http://angular.io/): Angular2 is a JavaScript framework.


## Cloning the repository

First, clone the front-end repository:

```
git clone git@github.com:Lugdunum3D/LugBench-Front.git
```

Then, navigate to the folder `LugBench-Front`

## Launch the project

You will need [NPM](https://www.npmjs.com/) (Node Packet Manager) installed on your computer. NPM will install all the dependances of the project.

In command line, you can launch the project with:

```
npm install
npm run serve
```
Then start any web browser go to `http://localhost:3000`

## Use NPM scripts

Command             | Description
--------------------|---------------------------------------------------------
`npm run build`     | Build an optimized version of your application in /dist
`npm run serve`     | Launch a browser sync server on your source files
`npm run serve:dist`| Launch a server on your optimized application
`npm run test`      | Launch your unit tests with Karma
`npm run test:auto` | Launch your unit tests with Karma in watch mode

