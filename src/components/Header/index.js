import React from "react";
import './styleHeader.css';
import { useNavigate} from 'react-router-dom';


import logo from '../../assets/logoStudioGhibli.png';
import home from '../../assets/bx-home.svg';
import logo_git from '../../assets/logo-github.png';

export default function Header(){
    let navigate = useNavigate();

    return(
        <div className="container-header">
            <div className="containerLogos">
                <button id="buttonLink" onClick={() => {navigate('/') }}>
                    <img alt="Home" id="homelogo" src={home}  />
                </button>
                <a href="https://github.com/JoseFreires/Studio-Ghibli" target="blank">
                    <img alt="logoGithub" id='logo-github-header' src={logo_git} />
                </a>
            </div>
            <div>
                <img alt="Logo" id="logo" src={logo} />
            </div>
        </div>
    )
}