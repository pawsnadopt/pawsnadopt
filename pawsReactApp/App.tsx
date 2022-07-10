import React, {Component} from 'react'
import {NativeFixtureLoader} from 'react-cosmos/native'
// You generate cosmos.userdeps.js when you start the Cosmos server
import {rendererConfig, fixtures, decorators} from './cosmos.userdeps.js'

export default class App extends Component {
  render() {
    return (
      <NativeFixtureLoader
        rendererConfig={rendererConfig}
        fixtures={fixtures}
        decorators={decorators}
      />
    )
  }
}

