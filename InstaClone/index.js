/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src/App'
import Feed from './src/screens/feed/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Feed);
