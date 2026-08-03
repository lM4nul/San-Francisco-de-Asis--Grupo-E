import Nav from "./components/nav/Nav"
import { Outlet } from "react-router";
import links from "./rutas"


function App() {

  return (
    <>


      <header className="sticky top-0 z-50 bg-neutral-50">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 p-3">
          <img src="https://picsum.photos/50/50" alt="Logo" className="rounded-full" />
          <p className="cursor-default "> <p className="text-xl">Proyecto San Francisco de Asís</p> <p className="text-sm">Salud y servicio para la comunidad</p> </p>
          <Nav links={links} />
        </div>
      </header>


      <main>

        <Outlet /> {/*Aqui se maneja toda la logica del rout OJO no borrar / info sacada de la documentacion*/}

      </main>

    </>
  )

}

export default App