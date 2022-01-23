import React from 'react';
import { LogBox } from 'react-native';
import { RootNavigator } from './navigations/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './store';

//React native SDKのバージョンによってワーニングが出る（そのワーニングを無視する）
LogBox.ignoreLogs([
  'Setting a timer',
  'AsyncStorage has been extracted from react-native core and will be remove in a future release',
]);

export default function App() {
  return (
    //storeを明示
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
