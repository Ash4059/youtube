import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Component/MainContainer';
import Watchpage from './Component/Watchpage';

const appRouter = createBrowserRouter([{
  path : '/',
  element : <Body />,
  children : [
    {
      path : '/',
      element : <MainContainer />
    },
    {
      path : 'watch',
      element : <Watchpage />
    }
  ]
}])

const headerRouter = createBrowserRouter([{
  path : '/',
  element : <Header />,
  children : [
    {
      path : '/',
      element : <MainContainer />
    },
    {
      path : 'watch',
      element : <Watchpage />
    }
  ]
}])

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
