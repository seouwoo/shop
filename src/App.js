import "./App.css";
import Root from "./page/Root";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import PrivateRoute from "./route/PrivateRoute";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("로그인");
  }, [authenticate]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        { index: true, element: <ProductAll /> },
        {
          path: "/login",
          element: <Login setAuthenticate={setAuthenticate} />,
        },
        {
          path: "/product/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <p>App</p>
    </RouterProvider>
  );
}

export default App;
