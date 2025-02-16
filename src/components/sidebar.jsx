import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({links, close}){
    const location = useLocation()
    return(
        <div className="sidebar" onClick={close}>
            {links.map(link => (
                <Link to={link.path} key={link.name} className={location.pathname === link.path ? "sideBar-links active" : "sideBar-links"} >
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    );
}