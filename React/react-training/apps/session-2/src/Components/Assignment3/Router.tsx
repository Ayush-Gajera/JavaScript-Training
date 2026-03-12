import { createBrowserRouter,type RouteObject  } from "react-router-dom";
import Home from "../Assignment1/Home";
import About from "../Assignment1/About";
const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <About />,
      },
    ],
  },
];
const Router= createBrowserRouter(router);
export default Router;

    
