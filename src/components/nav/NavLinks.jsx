import { NavLink } from "react-router";

const NavLinks=(
    {
        text,
        href,
        classNames,
        onClick,
    }
)=>{
    return(

        <li>
            <NavLink to={href} onClick={onClick}
                className={({ isActive }) =>
                    ["cursor-pointer", isActive ? "text-orange-500 font-bold" : "hover:text-black", ...classNames].join(' ')
                }>
                {text}
            </NavLink>
        </li>
        
    );
};

export default NavLinks