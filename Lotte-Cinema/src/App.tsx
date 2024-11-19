import router from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const browserRouter = createBrowserRouter(router);

  return <RouterProvider router={browserRouter} />;
};

export default App;
