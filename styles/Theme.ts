import { extendTheme, textDecoration, type ThemeConfig } from "@chakra-ui/react"
import { mode, Styles, GlobalStyleProps } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "rgb(32, 32, 35)")(props)
    }
  })
}

const components = {
  // setup light/dark mode component defaults
  // Link: {
  //   baseStyle: (props: GlobalStyleProps) => ({
  //     color: mode('blue.400', 'blue.300')(props),
  //   })
  // }
};

const theme = extendTheme({ config, styles, components })

export default theme