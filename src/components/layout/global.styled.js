import { createGlobalStyles } from "goober/global"

export const GooberGlobalStyles = createGlobalStyles`
.headroom {
  z-index: 2 !important;
}

body {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
  @media print {
    #bf-revz-widget-1484606125{
      display: none !important;
    }
  }
`
