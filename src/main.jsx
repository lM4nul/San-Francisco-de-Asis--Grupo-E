import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import {
  Inicio,
  Nosotros,
  Programas,
  ComoAyudar,
  Galeria,
  Blog,
  Eventos,
  Contacto,
  Donaciones,
  Faq,
} from './page'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Inicio },
      { path: "nosotros", Component: Nosotros },
      { path: "programas", Component: Programas },
      { path: "como-ayudar", Component: ComoAyudar },
      { path: "galeria", Component: Galeria },
      { path: "blog", Component: Blog },
      { path: "eventos", Component: Eventos },
      { path: "contacto", Component: Contacto },
      { path: "donaciones", Component: Donaciones },
      { path: "faq", Component: Faq },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
