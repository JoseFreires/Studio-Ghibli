import React from "react";
import './styleCard.css'

export default function Card(props){
    return(
        <div className="container-card">
            <div className="container-image-card">
                <img id='movieCard' src={props.image}/>
            </div>
            <div className="container-informations-card">
                <p id="titleMovieCard">{props.title}</p>
                <p id="nameJapaneseCard">{props.titleJapanese}</p>
            </div>
        </div>
    )
}