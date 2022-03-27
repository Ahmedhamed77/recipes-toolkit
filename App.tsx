import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';

import {Route} from './src/navigation';
import {store} from './src/redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Route />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
