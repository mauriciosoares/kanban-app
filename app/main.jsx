import 'array.prototype.findindex';
import './main.css';

import React from 'react';
import App from './components/App.jsx';

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

persist(alt, storage, 'app');

React.render(<App />, document.body);
