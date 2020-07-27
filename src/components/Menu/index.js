import React from 'react'
import logo from '../../assets/imgs/logo.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className= "logo" src={logo} alt="Logo Aluraflix"/>
            </a>
            <Button className= "ButtonLink" href= "/">
                Criar vídeo
            </Button>
        </nav>
    )
}

export default Menu