import router from "./routes";
import styled from "@emotion/styled";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const Main = styled.section`
  display: flex;

  color: white;
`;

const App = () => {
  const browserRouter = createBrowserRouter(router);

  return <RouterProvider router={browserRouter} />;
};

export default App;
