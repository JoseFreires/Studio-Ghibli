import React from "react";
import Modal from 'react-modal'
import "./styleModalInfo.css"

import {FaInfoCircle} from 'react-icons/fa'

export default function ModalInfo(props){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }
    
    return (
        <div className="containerModal">
    
        <button id='buttonModal' onClick={openModal}>
            <FaInfoCircle size={15}/>
        </button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-info-content"
        >
            <div className="containerLeftModal">
            <img id='imageModal' src={props.imageModal} alt=""/> 
            <p>{props.titleModal}</p>
            <p id="titleJapaneseModal">{props.titleJapaneseModal}</p>
                   
            </div>
            <div className="containerRightModal">
                <p id="sinopse">{props.sinopse}</p>
                <div className="containerProducao">
                    <p>Director: {props.diretor}</p>
                    <p>Producer: {props.produtor}</p>
                </div>
                <div className="containerInfoTime">
                    <p>Release date: {props.year}</p>
                    <p>Running Time: {props.time}</p>
                    <p>Score: {props.score}</p>
                </div> 
            </div>
        </Modal>
    
        </div>
        );
}