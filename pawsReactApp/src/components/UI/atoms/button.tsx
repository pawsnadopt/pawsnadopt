import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'
import Colors from '../../../theme/colors'

interface Props {
  title: string
  onPress: () => void
  backgroundColor?: string
  color?: string
  width?: number
  height?: number
  margin?: number
}

const Button = (props: Props) => {
  const {title, onPress, backgroundColor, color, width, height, margin} = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor,
        width,
        height,
        margin,
      }}>
      <Text style={{...styles.text, color}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  text: {
    alignItems: 'center',
    color: Colors.primary,
    fontWeight: 'bold',
    letterSpacing: 1.1,
    fontSize: 16,
  },
})

Button.defaultProps = {
  backgroundColor: Colors.accent,
  color: Colors.primary,
  width: '50%',
  height: 45,
  margin: 5,
}

export default Button
