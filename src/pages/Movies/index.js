import React, {useEffect, useState} from "react";
import CardBig from "../../components/CardBig";
import  search_image  from '../../assets/search.svg';
import './styleMovies.css'

import EstruturaPage from "../../components/EstruturaPage";

const Movies = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() =>{
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then((response) => response.json())
        .then(setData)
    }, [])
    
    if(!data || !data.length) return null

    return(
        <EstruturaPage>
            <div className="containerMovies">
                <div className="containerMainMovies">
                    <h1 id="title-movies">Informações sobre os filmes</h1>
                        <div className="containerSearch">
                            <img alt="search" src={search_image} />
                            <input type='text' id="search" placeholder='Search...' 
                                onChange={(event) => {
                                    setSearch(event.target.value)
                                }}/>
                        </div>
                        <div className="listMovies">
                            {data
                            // eslint-disable-next-line
                            .filter((val) => {
                                if(search === ""){
                                    return val
                                } else if(val.title.toLowerCase().includes(search.toLowerCase())){
                                    return val
                                }
                            })
                            .map((item) => {
                                const {title, original_title, image, running_time, release_date, description} = item;
                                return(
                                    <CardBig 
                                        image={image}
                                        title={title}
                                        titleJapanese={original_title}
                                        year={release_date}
                                        time={running_time}
                                        description={description}
                                    />
                                )
                            })}
                        </div>
                </div>
            </div>
        </EstruturaPage>
    )
}

export default Movies;