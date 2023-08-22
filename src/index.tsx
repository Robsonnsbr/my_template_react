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
    path: "/my_template_react/*", // Adicione o curinga "*" aqui
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "oldProject",
        element: <Navigate to="../Project" />,
      },
      {
        path: "contact",
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
