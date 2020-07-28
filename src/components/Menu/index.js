import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/imgs/logo.png"
import "./Menu.css"
import Button from "../Button"

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className= "logo" src={logo} alt="Logo Purinflix"/>
            </Link>
            <Button as= {Link} className= "ButtonLink" to= "/register/video">
                Add a new video
            </Button>
        </nav>
    )
}

export default Menu