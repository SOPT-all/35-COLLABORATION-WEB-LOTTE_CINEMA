import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  const browserRouter = createBrowserRouter(router);

  return <RouterProvider router={browserRouter}></RouterProvider>;
}

export default App;
