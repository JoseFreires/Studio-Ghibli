import React from "react";
import ModalInfo from "../ModalInfo";
import './styleCard.css'

export default function Card(props){
    return(
        <div className="container-card">
            <div className="container-image-card">
                <img id='movieCard' src={props.image} alt=""/>
            </div>
            <div className="container-informations-card">
                <p id="titleMovieCard">{props.title}</p>
                <p id="nameJapaneseCard">{props.titleJapanese}</p>
                <ModalInfo 
                    imageModal={props.image}
                    titleModal= {props.title}
                    titleJapaneseModal= {props.titleJapanese}
                    year={props.year}
                    time={props.time}
                    score={props.score}
                    sinopse={props.sinopse}
                    diretor={props.diretor}
                    produtor={props.produtor}
                />
            </div>
        </div>
    )
}