import React from 'react'
import {action} from '@storybook/addon-actions'
import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import Button from '../../../../src/components/atoms/button'
import Text from '../../../../src/components/atoms/text'

import CenterView from '../../CenterView'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    <Button text={<Text>Click Me 😀 😎 👍 💯</Text>} onPress={action('clicked-text')} />
  })
