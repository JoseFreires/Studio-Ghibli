import React from "react";
import './styleFooter.css'
import logo_git from '../../assets/logo-github.png'
import logo_linkedin from '../../assets/linkedin.png'

export default function Footer(){
    return(
        <div className='containerFooter'>
            <div>
                <h1>Feito por José Freires</h1>
            </div>
            <div className='containerLogo'>
                <a href='https://github.com/JoseFreires' target='blank'>
                    <img id='logo-footer' src={logo_git} alt="Logo Github"/>
                </a>
                <a href='www.linkedin.com/in/josefreires' target='blank'>
                    <img id='logo-footer' src={logo_linkedin} alt="Logo Linkedin"/>
                </a>
            </div>
        </div>
    )
}