import React, {Component} from 'react'
import {NativeFixtureLoader} from 'react-cosmos/native'
// You generate cosmos.userdeps.js when you start the Cosmos server
import {rendererConfig, fixtures, decorators} from './cosmos.userdeps.js'

class App extends Component {
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

export default Config.LOAD_COSMOS === 'true' ? StorybookUI : App
