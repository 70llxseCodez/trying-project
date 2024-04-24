import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Eduction from "./pages/education/Eduction";
import AnonymousChat from "./pages/anonymous-chat/AnonymousChat";
import About from "./pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/anonymous-chat",
        element: <AnonymousChat />,
      },
      {
        path: "/eduction",
        element: <Eduction />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
