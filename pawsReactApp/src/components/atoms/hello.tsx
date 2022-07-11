import React from 'react'
import {Text} from 'react-native'

type helloProps = {
  greeting: string
  name: string
}

export function Hello({greeting, name}: helloProps) {
  return (
    <Text>
      {greeting}, {name}!
    </Text>
  )
}
