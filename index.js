/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import MenuNavigator from './src/navigator/Navigator'
import {name as appName} from './app.json';
import React from 'react'
import { Provider } from 'react-redux'
import config from './src/store/storeConfig'

const store = config()
const Redux = () => {
    return <Provider store={store}>
        <MenuNavigator></MenuNavigator>
    </Provider>
}

AppRegistry.registerComponent(appName, () => Redux);
