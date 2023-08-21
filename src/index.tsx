import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { App } from "./App.tsx";
import { routesPage } from "./routes/exportRoutesPage.tsx";
const { ErrorPage, Home, About, Projects, ProjectDetails, Contact } =
  routesPage;

import "./global.css";

const router = createBrowserRouter([
  {
    path: "/my_template_react",
    element: <App />,
    errorElement: <ErrorPage />,
    //TODO: verificar porq ele não entra no ErrorPage? funciona só com o caminho base "/"?
    children: [
      {
        path: "/my_template_react",
        element: <Home />,
      },
      {
        path: "/my_template_react/about",
        element: <About />,
      },
      {
        path: "/my_template_react/Projects",
        element: <Projects />,
      },
      {
        path: "/my_template_react/Project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/my_template_react/oldProject",
        element: <Navigate to="/my_template_react/Project" />,
      },
      {
        path: "/my_template_react/Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
