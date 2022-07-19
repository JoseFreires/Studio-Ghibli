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
                    <img id='logo-github' src={logo_git} alt="Logo Github"/>
                </a>
                <a href='https://www.linkedin.com/in/josé-guilherme-silva-freires-27b778227?original_referer=' target='blank'>
                    <img id='logo-github' src={logo_linkedin} alt="Logo Linkedin"/>
                </a>
            </div>
        </div>
    )
}