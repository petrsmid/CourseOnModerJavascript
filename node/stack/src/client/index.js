import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import injectTapEventPlugin from 'react-tap-event-plugin';

const app = document.getElementById('app-root');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

//render page
ReactDOM.render(<Main />, app);


