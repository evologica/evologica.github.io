import 'babel-polyfill'
import './index.scss'
import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import {render} from 'react-dom'
import App from './app'
import store from './app/store/configureStore'

injectTapEventPlugin()

const element = document.getElementById('root')
render(<App/>, element)

if (module.hot) {
  module.hot.accept('./app/reducers', () => {
    const nextReducer = require('./app/reducers').default
    store.replaceReducer(nextReducer)
  })
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    render(<NextApp/>, element)
  })
}
