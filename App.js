import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

// NAVIGATIONS
import SwitchNavigator from './navigation/switchNavigator';

export default function App() {

  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );


}


