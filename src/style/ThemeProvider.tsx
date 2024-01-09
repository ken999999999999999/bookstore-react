import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles"
import { ReactNode } from "react"
import theme from "./theme"
import { CssBaseline } from "@mui/material"

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <MUIThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MUIThemeProvider>
)

export default ThemeProvider
