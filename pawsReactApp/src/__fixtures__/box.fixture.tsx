import React from 'react'
import Box from '../components/atoms/box'
import Text from '../components/atoms/text'

export default (
  <Box
    flex={1}
    justifyContent="center"
    backgroundColor="primary"
    width="xl"
    height="xl"
    shadowColor="boxShadow">
    <Text variant="header" textAlign="center">
      Box Component
    </Text>
    <Text variant="paragraph">
      Change code in the editor and watch it change on your phone! Save to get a
      shareable url.
    </Text>
  </Box>
)
