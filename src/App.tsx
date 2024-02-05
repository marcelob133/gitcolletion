import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from './styles/global';
import { Repo } from "./pages/Repo";


let router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/repositories/*',
    element: <Repo />,
  },
]);


export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <GlobalStyle />
    </>
  );
}
