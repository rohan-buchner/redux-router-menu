import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools'
import { ConnectedRouter } from 'react-router-redux'
import App from './containers/App'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)


