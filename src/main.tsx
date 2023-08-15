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
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Contact/:id",
        element: <ContactDetails />,
      },
      {
        path: "oldContact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
