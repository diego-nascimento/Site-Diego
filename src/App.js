import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import Store from './store/index';
import SideMenu from './Components/SideMenu/SideMenu';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="TotalContainer">
      <Provider store={Store}>
        <GlobalStyles />
        <BrowserRouter>
          <SideMenu />
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
