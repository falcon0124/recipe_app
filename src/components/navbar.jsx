import { Link,useLocation } from "react-router-dom"
import React,{ useState } from "react"
import Sidebar from "./sidebar"
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipe",
            icon: faList

        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ];
    function closeSidebar(){
        setShowSidebar(!showSidebar);
    }
    return(
        <>
            <div className="navbar container">
                <a href="#!" className="logo">F<span>oo</span>diesHub</a>
                <div className="nav-links">
                    {/* <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">settings</a> */}
                    {links.map(link => (
                        <Link to={link.path} key={link.name} className={location.pathname == link.path ? "active" : ""}>{link.name}</Link>
                    ))}
                </div>
                <div className={showSidebar ? "sidebar-btn active" : "sidebar-btn"} onClick={() => {setShowSidebar(!showSidebar)}}>
                    <div className="bar"></div>      
                    <div className="bar"></div>      
                    <div className="bar"></div>      
                </div>
            </div>
            {showSidebar ? <Sidebar close = {closeSidebar} links = {links}/> : ""}
        </>
    )
}