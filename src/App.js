import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDItcAtmdDbR4RMIx7Ok-Q_8wv4zqARM8U',
      authDomain: 'manager-2c7f1.firebaseapp.com',
      databaseURL: 'https://manager-2c7f1.firebaseio.com',
      storageBucket: 'manager-2c7f1.appspot.com',
      messagingSenderId: '960327408786'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}

export default App;
