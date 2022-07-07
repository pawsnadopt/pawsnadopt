/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
export { default } from './storybook'

AppRegistry.registerComponent(appName, () => App);
