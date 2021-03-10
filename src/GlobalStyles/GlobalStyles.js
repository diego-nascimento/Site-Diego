import { createGlobalStyle } from 'styled-components';
import { Styles } from '../GlobalStyles/Styles';

export const GlobalStyles = createGlobalStyle`

  *{
    padding: 0;
    outline: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  }

  ul, li{
    list-style: none;
  }

::-webkit-scrollbar{
  display: none;
}

.TotalContainer{
  overflow: hidden;
  width: 100vw;
  position :relative;
  display: flex;
  
}
 

  body{
    width: 100vw;
    height: 100%;
    font-family: 'Roboto Mono', monospace;
    font-size: 100%;
  }

  #root{
    display: flex;
    background-color: ${Styles.asideBGColor}
  }

  
`;
