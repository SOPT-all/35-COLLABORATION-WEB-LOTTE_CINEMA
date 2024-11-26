import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import router from './routes';

const App = () => {
  const browserRouter = createBrowserRouter(router);

  return <RouterProvider router={browserRouter} />;
};

export default App;
