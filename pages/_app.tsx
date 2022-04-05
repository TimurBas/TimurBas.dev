import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import Layout from "../components/shared/Layout"
import theme from "../styles/Theme"
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
