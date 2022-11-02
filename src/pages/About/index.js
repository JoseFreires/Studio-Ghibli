import React from "react";
import './styleAbout.css';


import EstruturaPage from "../../components/EstruturaPage";
import logo from '../../assets/logoStudioGhibli.png';

const About = () =>{
    return(
        <EstruturaPage>
            <div className="containerMainAbout">
                <div className="containerSecondAbout">
                    <div className="containerInfo">
                        <div className="containerText">
                            <h2>O que é?</h2>
                            <p>Studio Ghibli Inc. (株式会社スタジオジブリ Kabushiki-gaisha Sutajio Jiburi?) é estúdio de cinema de animação japonês com sede em Koganei, Tóquio .  O estúdio é mais conhecido por seus filmes de animação e também produziu vários curtas, comerciais de televisão e um filme de televisão. Foi fundado em 15 de junho de 1985 pelos diretores Hayao Miyazaki e Isao Takahata e pelo produtor Toshio Suzuki , após o sucesso do filme de anime de Topcraft, Nausicaä do Vale do Vento(1984). O Studio Ghibli também colaborou com os estúdios de videogame no desenvolvimento visual de vários jogos.</p>
                            <p>Seis dos filmes de Studio Ghibli estão entre os 10 filmes de anime com maior bilheteria produzidos no Japão, sendo Sen to Chihiro no Kamikakushi o segundo mais alto, arrecadando mais de US$ 360 milhões em todo o mundo. Muitos de seus trabalhos ganharam o prêmio Animage Anime Grand Prix e quatro ganharam o Prêmio da Academia de Animação do Ano do Japão . Cinco dos filmes de Studio Ghibli receberam indicações ao Oscar. Sen to Chihiro no Kamikakushi ganhou o Urso de Ouro em 2002 e o Oscar de Melhor Filme de Animação em 2003 . Totoro, um personagem de Tonari no Totoro é o mascote do estúdio.</p>
                        </div>
                    </div>
                    <div className="containerImage">
                        <a href="https://pt.wikipedia.org/wiki/Studio_Ghibli" target='blank'>
                            <img src={logo}  id="middle-Image" alt="Studio Ghibli"/>
                        </a>
                    </div>
                    <div className="containerHistory">
                        <div className="containerText">
                            <h2>Sua História</h2>
                            <p>O Studio Ghibli foi fundado em 1985 por Hayao Miyazaki, Isao Takahata, Toshio Suzuki e Yasuyoshi Tokuma, logo após o sucesso de Kaze no Tani no Nausicaä no ano anterior. O estúdio lançou seu primeiro filme, Tenkū no Shiro Rapyuta, no ano seguinte. O logotipo da empresa é Totoro, um personagem do filme Tonari no Totoro, lançado em 1988. Com exceção de seis produções, todos os filmes do estúdio foram dirigidos por Hayao Miyazaki e Isao Takahata. Toshio Suzuki, por sua vez, é o produtor da maioria deles. Em 2001, o Museu Ghibli, um museu dedicado às obras do estúdio, foi inaugurado.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </EstruturaPage>
    )
}

export default About;