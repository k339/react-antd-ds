import { createGlobalStyle } from 'styled-components'
import IBMPlexSansThaiSemiBold from '../fonts/IBMPlexSansThai-SemiBold.ttf'
import IBMPlexSansThaiMedium from '../fonts/IBMPlexSansThai-Medium.ttf'
import IBMPlexSansThaiRegular from '../fonts/IBMPlexSansThai-Regular.ttf'

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'IBM Plex Sans Thai Semibold';
    src: url(${IBMPlexSansThaiSemiBold}) format('truetype');
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans Thai Medium';
    src: url(${IBMPlexSansThaiMedium}) format('truetype');
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans Thai Regular';
    src: url(${IBMPlexSansThaiRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  body {
    font: ${(props) => props.theme.fonts.WebBody1};
  }
`
