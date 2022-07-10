import React from 'react'
import {Text} from 'react-native'

export function Hello({greeting, name}) {
  return (
    <Text>
      {greeting}, {name}!
    </Text>
  )
}
