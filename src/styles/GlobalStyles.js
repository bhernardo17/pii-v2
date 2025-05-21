<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0066CC;
    --secondary: #2C3E50;
    --accent: #3498DB;
    --text-primary: #2C3E50;
    --text-secondary: #7F8C8D;
    --text-light: #FFFFFF;
    --background-dark: #1a1a1a;
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --bg-accent: #E9ECEF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    scroll-padding-top: 80px; // Ajuste para compensar o header fixo
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
  }

  button {
    font-family: inherit;
  }
`;

=======
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0066CC;
    --secondary: #2C3E50;
    --accent: #3498DB;
    --text-primary: #2C3E50;
    --text-secondary: #7F8C8D;
    --text-light: #FFFFFF;
    --background-dark: #1a1a1a;
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --bg-accent: #E9ECEF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    scroll-padding-top: 80px; // Ajuste para compensar o header fixo
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
  }

  button {
    font-family: inherit;
  }
`;

>>>>>>> Nicodev
export default GlobalStyles;