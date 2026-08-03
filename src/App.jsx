import Nav from "./components/nav/Nav"
import { Outlet, Link } from "react-router";
import links from "./rutas"


function App() {

  return (
    <>


      <header className="sticky top-0 z-50 bg-neutral-50 mb-3">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 p-3 ">
          <img src="/img/index/logo-proyecto.webp" alt="Logo" className="rounded-full max-w-24" />
          <p className="cursor-default "> <p className="text-xl">Proyecto San Francisco de Asís</p> <p className="text-sm">Salud y servicio para la comunidad</p> </p>
          <Nav links={links} />
        </div>
      </header>


      <main>

        <Outlet /> {/*Aqui se maneja toda la logica del rout OJO no borrar / info sacada de la documentacion*/}


      </main>

      <footer className="bg-neutral-900 text-white mt-5">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-orange-400  mb-3">Ubicación</h3>
            <p className="text-neutral-400">Reitoca, Francisco Morazán, Honduras</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-400">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="nosotros" className="text-neutral-400 hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="programas" className="text-neutral-400 hover:text-white transition-colors">Programas</Link></li>
              <li><Link to="contacto" className="text-neutral-400 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-400">Apoyo</h3>
            <p className="text-neutral-400">Organización sin fines de lucro al servicio de la comunidad.</p>
          </div>
        </div>
        <div className="border-t border-neutral-700">
          <p className="text-center text-neutral-400 py-4 cursor-default">© 2026 Proyecto San Francisco de Asís</p>
        </div>
      </footer>

    </>
  )

}

export default App