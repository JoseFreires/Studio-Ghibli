import React from "react";
import './styleCardBig.css'

export default function CardBig(props){
    return(
        <div className="container-CardBig">
            <div className="container-main-CardBig">
                <div className="container-left">
                    <div>
                        <img id="banner" src={props.image}/>
                    </div>
                    <div>
                        <p id="title">{props.title}</p>
                        <p>{props.titleJapanese}</p>
                        <div className="container-info">
                            <p>Release year: {props.year}</p>
                            <p>Time: {props.time}</p>
                        </div>
                    </div>
                </div>
                <div className="container-right">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}