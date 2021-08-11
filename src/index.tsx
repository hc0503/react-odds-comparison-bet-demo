import { render } from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

import store from './redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./layouts/app/App"

const rootElement = document.getElementById("root");
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  rootElement
)