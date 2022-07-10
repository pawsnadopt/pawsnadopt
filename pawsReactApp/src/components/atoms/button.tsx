// Button.tsx
import React from 'react'
import {BoxProps, TextProps} from '@shopify/restyle'
import {ActivityIndicator, TouchableHighlight} from 'react-native'
import {Theme} from '../../theme'
import Box from './box'
import Text from './text'

type ButtonProps = {
  text: string
  onPress: () => void
  loading?: boolean
  textProps?: TextProps<Theme>
} & Partial<BoxProps<Theme>>

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  loading,
  textProps,
  ...props
}) => (
  <TouchableHighlight underlayColor="transparent" onPress={onPress}>
    <Box
      backgroundColor="buttonPrimaryBackground"
      borderRadius={8}
      shadowOffset={{height: 2, width: 0}}
      shadowRadius={5}
      shadowColor="buttonShadow"
      shadowOpacity={0.2}
      {...props}>
      {loading ? (
        <ActivityIndicator color="buttonShadow" />
      ) : (
        <Text color="buttonText" {...textProps}>
          {text}
        </Text>
      )}
    </Box>
  </TouchableHighlight>
)

export default Button
