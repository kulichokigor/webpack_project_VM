import {person} from './modules/config.data';
import AppServiceExport from './modules/app.service';
import React from 'react';
import {render} from 'react-dom'
import './modules/header.components';
import './css/index.css';
import './less/index.less';
import './scss/index.scss';
import App from './app'


console.log("Name object: ", person.name)

const service_app = new AppServiceExport('TEXT!!!!')

service_app.testFunc()


render(<App/>, document.getElementById('app'))