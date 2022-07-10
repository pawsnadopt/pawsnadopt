import React from "react"
import { ThemeProvider, theme } from "../../src/theme"

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator