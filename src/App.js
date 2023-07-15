import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
