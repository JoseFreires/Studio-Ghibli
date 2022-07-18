import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './styleHome.css'

import Card from "../../components/Card";
import EstruturaPage from "../../components/EstruturaPage";
import left from '../../assets/bx-chevron-left.svg'
import right from '../../assets/bx-chevron-right.svg'

const Home = () =>{
    const [data, setData] = useState([]);
    const carrossel = useRef(null);
    let navigate = useNavigate();

    useEffect(() =>{
        fetch('https://ghibliapi.herokuapp.com/films/').then((response) => response.json()).then(setData)
    }, [])

    if(!data || !data.length) return null

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
      };

    return(
        <EstruturaPage>
            <div className="containerHome">
                <div className="containerMainHome">
                    <div>
                        <h1  id="principal-title">Studio Ghibli Movies</h1>
                    </div>
                    <div className="containerCarrossel">
                        <div className="buttonContainer" onClick={handleLeftClick}>
                            <img alt="button-left" src={left} id='button'/>
                        </div>
                        <div className="carrossel" ref={carrossel}>
                            {data.map((item) => {
                            const {title, original_title, image} = item;
                            return(
                                <Card 
                                    image={image}
                                    title={title}
                                    titleJapanese={original_title}
            
                                />
                            )
                            })}
                        </div>
                        <div className="buttonContainer" onClick={handleRightClick} >
                            <img alt="button-right" src={right} id='button'/>
                        </div>
                    </div>
                    <div className="containerButtons">
                        <button id="leave-button" onClick={() => { navigate('/movies') }}>
                            More Informations about Movies
                        </button>
                        <button id="leave-button" onClick={() => { navigate('/about') }}>
                            About Studio Ghibli
                        </button>
                    </div>
                </div>
            </div>
        </EstruturaPage>
    )
}

export default Home;