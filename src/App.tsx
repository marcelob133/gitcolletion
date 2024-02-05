import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Dashboard } from "./pages/Dashboard";
// import { Repo } from "./pages/Repo";
import { GlobalStyle } from './styles/global';

const Dashboard = lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "dashboard" */ './pages/Dashboard'
));
const Repo = lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "repo" */ './pages/Repo'
));


let router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: '/repositories/*',
    element: (
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo />
      </Suspense>
    ),
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
