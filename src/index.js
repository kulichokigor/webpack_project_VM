import {person} from './modules/config.data';
import AppServiceExport from './modules/app.service';
import './modules/header.components'

console.log("Name object: ", person.name)

const service_app = new AppServiceExport('this title work!')

service_app.testFunc()

const root = document.querySelector('#root');

root.textContent = person.name