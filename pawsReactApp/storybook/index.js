/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import { AppRegistry, Platform } from 'react-native';
import {appName} from '../app.json'
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import {loadStories} from '../storybook/storyLoader'

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories()
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage: require('@react-native-community/async-storage').default
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
