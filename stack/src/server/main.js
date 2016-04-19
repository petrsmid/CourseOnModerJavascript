import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import compression from 'compression';
import config from './config';
import Html from './html';

const app = express();

app.use(compression());
app.use('/build', express.static('build'));

app.get('*', (req, res) => {
  res.send('<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
    <Html
      isProduction={config.isProduction}
      version={config.version}
    />
  ));
});

app.listen(config.port);
console.log(`Server started on port ${config.port}`);
