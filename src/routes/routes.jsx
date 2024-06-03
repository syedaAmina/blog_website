
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
export const router = createBrowserRouter
// eslint-disable-next-line no-unexpected-multiline
([
    {
      path: "/",
      element: <MainLayout/>,
      children:
      {
        path: "/",
      element: <Home/>,
      }
    },
  ]);
  