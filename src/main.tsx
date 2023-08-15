import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { App } from "./App.tsx";
import { ErrorPage } from "./routes/ErrorPage.tsx";
import { Home } from "./routes/Home.tsx";
import { Contact } from "./routes/Contact.tsx";
import { About } from "./routes/About.tsx";
import { ContactDetails } from "./routes/ContactDetails.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/my_template_react",
    element: <App />,
    errorElement: <ErrorPage />,
    //TODO: verificar pq ele não entra no ErrorPage? funciona só com o caminho base "/"?
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
        path: "/my_template_react/contact",
        element: <Contact />,
      },
      {
        path: "/my_template_react/contact/:id",
        element: <ContactDetails />,
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
