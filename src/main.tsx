import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { App } from "./App.tsx";
import { rotas } from "./routes/exportsRotes.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/my_template_react",
    element: <App />,
    errorElement: <rotas.ErrorPage />,
    //TODO: verificar porq ele não entra no ErrorPage? funciona só com o caminho base "/"?
    children: [
      {
        path: "/my_template_react",
        element: <rotas.Home />,
      },
      {
        path: "/my_template_react/about",
        element: <rotas.About />,
      },
      {
        path: "/my_template_react/contact",
        element: <rotas.Contact />,
      },
      {
        path: "/my_template_react/contact/:id",
        element: <rotas.ContactDetails />,
      },
      {
        path: "/my_template_react/oldContact",
        element: <Navigate to="/my_template_react/contact" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
