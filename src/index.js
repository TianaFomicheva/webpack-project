import React from 'react'
import {render} from 'react-dom'
import {config} from './modules/config'
import App from './App'
import './modules/ts.module'
import AppService from './modules/app.service'
import  './css/index.css'
import  './less/index.less'
import  './scss/index.scss'

console.log('config key:', config.key)
render(<App />, document.getElementById('app'))

const service = new AppService('Hello, world!')
service.log()