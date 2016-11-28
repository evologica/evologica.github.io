import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import {Provider} from 'react-redux'
import store from './store/configureStore'
import {Router, Route, browserHistory} from 'react-router'
import Main from './containers/Main'
import {AppContainer} from 'react-hot-loader'

// Temporário se deus quiser
Router.prototype.componentWillReceiveProps = function (nextProps) {
  let components = []
  function grabComponents (element) {
    if (element.props && element.props.component) {
      components.push(element.props.component)
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents)
    }
  }
  grabComponents(nextProps.routes || nextProps.children)
  components.forEach(React.createElement)
}

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <Route path=":text" component={Main}/>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  </AppContainer>
)
export default App
