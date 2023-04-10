import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --hue: 280;

    --containerBg: hsl(var(--hue) 20% 95% / 100%);
    --background: hsl(var(--hue) 20% 15% / 100%);
    --text: hsl(var(--hue) 35% 40% / 100%);

    --primaryButtonBackground: hsl(var(--hue) 35% 40% / 100%);
    --primaryButtonTextColor: hsl(var(--hue) 30% 90% / 100%);
    --primaryButtonShadow: hsl(var(--hue) 30% 10% / 100%);
    --primaryButtonDisabledBackground: hsl(var(--hue) 35% 40% / 50%);

    --formFieldBorder: hsl(var(--hue) 35% 40% / 100%);
    --formTextColor: hsl(var(--hue) 35% 40% / 100%);
    --formFocusBackgroundColor: hsl(var(--hue) 30% 90% / 100%);

    --fontFamily: "Roboto", sans-serif;
  }

  html{
    scrollbar-width: thin;
  }

  body {
    background-color: var(--background);
    
    font-family: var(--fontFamily);
    color: var(--text);
    letter-spacing: 1.5px;

    * {
      box-sizing: border-box;
      scrollbar-width: thin;
      outline: none;
      
      font-family: inherit;
      color: inherit;
      letter-spacing: inherit;
    }

    a {
      text-decoration: none;
    }
  }
`
