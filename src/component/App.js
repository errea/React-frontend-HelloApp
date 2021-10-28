import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/configureStore';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Greeting />} />
        </Switch>
      </Router>
    </Provider>
  </>
);

export default App;
