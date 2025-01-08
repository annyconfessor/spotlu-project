import { ReactElement } from "react"
import { ThemeProvider as StyledProvider } from "styled-components"

type ThemeProps = {
  children: ReactElement,
  theme: object
}

const ThemeProvider = ({ children, theme }: ThemeProps) => {
  return(
    <StyledProvider theme={theme}>{children}</StyledProvider>
  )
}

export default ThemeProvider