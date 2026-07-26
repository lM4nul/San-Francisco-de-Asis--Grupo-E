import { useState } from "react"; //import para que funcione la hamburguesa con javascripr
import NavLinks from "./NavLinks";

const Nav = (
    { links }
) => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (

        <nav className="relative w-full lg:w-auto flex justify-between lg:justify-start items-center">

            <button className="lg:hidden text-2xl cursor-pointer"
                onClick={() => setMenuAbierto(!menuAbierto)} >

                {menuAbierto ? <button className="text-base bg-cyan-500 p-1 px-4 rounded-full">Cerrar</button> : <button className="text-base bg-cyan-500 p-1 px-4 rounded-full">Menú</button>}

            </button>

            <ul className={`${menuAbierto ? "flex" : "hidden"} absolute top-full left-0 w-full bg-neutral-50 flex-col p-4 
            lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:flex lg:flex-row lg:p-0
            list-none gap-4 z-50`}>

                {(links ?? []).map((o) => {
                    return (<NavLinks
                        key={o.text}
                        text={o.text}
                        href={o.href}
                        classNames={o.classNames ?? []}
                        onClick={() => setMenuAbierto(false)} />);
                })}

            </ul>
        </nav>



    );


};

export default Nav;