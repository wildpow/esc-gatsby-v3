import { GlobalStyles } from "twin.macro"
import { GooberGlobalStyles } from "./src/components/layout/global.styled"
import WindowSizeProvider from "./src/context/WindowSizeCtx"
import { InterfaceProvider } from "./src/context/InterfaceCtx"
import React from "react"
import StoreProvider from "./src/context/StoreCtx"
import "@fontsource/roboto"
import "@fontsource/roboto-slab"

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <WindowSizeProvider>
        <InterfaceProvider>
          <GooberGlobalStyles /> <GlobalStyles />
          {element}
        </InterfaceProvider>
      </WindowSizeProvider>
    </StoreProvider>
  )
}
