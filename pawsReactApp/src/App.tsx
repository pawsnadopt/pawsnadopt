import React, {Component} from 'react'
import {NativeFixtureLoader} from 'react-cosmos/native'
import {Text} from 'react-native'
import Config from 'react-native-config'
import {ThemeProvider} from '@shopify/restyle'
import theme from './theme'
// You generate cosmos.userdeps.js when you start the Cosmos server
import {rendererConfig, fixtures, decorators} from '../cosmos.userdeps.js'

export class Cosmos extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NativeFixtureLoader
          rendererConfig={rendererConfig}
          fixtures={fixtures}
          decorators={decorators}
        />
      </ThemeProvider>
    )
  }
}

class App extends Component {
  render() {
    return <Text>Hello World</Text>
  }
}

export default Config.LOAD_COSMOS === 'true' ? Cosmos : Cosmos

