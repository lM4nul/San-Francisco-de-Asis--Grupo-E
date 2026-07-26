import { Link } from "react-router";

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
            <Link to={href} onClick={onClick} className={["hover:text-black","cursor-pointer",...classNames].join(' ')}>
                {text}
            </Link>
        </li>
        
    );
};

export default NavLinks