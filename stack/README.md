## Template for Modern Web Applications

Template for Building Modern Single-page Applications Using React.js

## Before you begin
   * Install node.js
   * Install new version of "npm": `npm install npm -g`
   * Install Flow:
```
    npm install flow-bin --global
```
   * If you use Windows, install Flow provider for Windows: Download from [www.ocamlpro.com/pub/ocpwin/flow-builds/](https://www.ocamlpro.com/pub/ocpwin/flow-builds/). Copy flow.exe to C:\Users\your_user\AppData\Roaming\npm\node_modules\flow-bin\vendor\flow.exe  
   
   * Install Gulp:

```
    npm install -g gulp
```
   * Install all dependencies:
```
    npm install
```

## Start to develop

- run `gulp`
- open browser at [localhost:8000](http://localhost:8000)

## Production version

Production version is minified and compacted. To build it run

```
    gulp clean
    gulp -p
```

The production version is built in "build" folder.

## ESLint

Checks code for possible problems

```
    gulp eslint
```

## Testing



## Dev Stack Info

Based on [Este stack](https://github.com/este/este)
and a [lightweight version](http://www.dzejes.cz/prvni-dev-stack.html) of it.

