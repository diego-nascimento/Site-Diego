import SideMenu from './Components/SideMenu/SideMenu';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import Store from './store/index';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="TotalContainer">
      <Provider store={Store}>
        <GlobalStyles />
        <SideMenu />
        <Main />
      </Provider>
    </div>
  );
}

export default App;
