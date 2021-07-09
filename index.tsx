/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./ReactotronConfig')
    .then(() => console.log('Reactotron configured!'))
    .catch(e => {
      console.log('Something went wrong!', e);
    });
}

AppRegistry.registerComponent(appName, () => App);
