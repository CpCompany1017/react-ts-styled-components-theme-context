import { createGlobalStyle, withTheme } from "styled-components";
import { ThemeProps } from "./themes";

type GlobalThemeProps = {
  theme: ThemeProps;
};

const GlobalStyle = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: 0;
 }
body {
 -webkit-font-smoothing: antialiased;
 height: 100vh;
 width: 50vw;
 margin: 0 auto;
 background-color: ${({ theme }: GlobalThemeProps) => theme.backgroundColor};
 display: flex;
 justify-content: center;
 align-items: center;
 color: ${({ theme }: GlobalThemeProps) => theme.textColor};
 }
`;

export default withTheme(GlobalStyle);
