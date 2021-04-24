import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import store from './redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App"

const rootElement = document.getElementById("root")

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)