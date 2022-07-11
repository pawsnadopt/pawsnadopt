import React from 'react'
import {View} from 'react-native'

export default ({children}: {children: React.ReactNode}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    {children}
  </View>
)
