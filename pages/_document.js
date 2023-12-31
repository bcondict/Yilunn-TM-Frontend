// import { ColorModeScript } from "@chakra-ui/react"
// import theme from "../src/theme"
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // <Html lang="en">
    //   <Head/ >
    //   <body>
    //     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    //     <Main/>
    //     <NextScript/>
    //   </body>
    // </Html>
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yilunn Task Manager</title>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
