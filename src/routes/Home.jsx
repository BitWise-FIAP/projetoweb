import "../css/global.css"
import { HomeStyle } from "../css/HomeStyle"
import { Link } from "react-router-dom"
import "../css/global.css"
import { useState } from "react";
import paisagem1 from "../assets/carro1.webp"
import paisagem2 from "../assets/carro2.jpg"
import paisagem3 from "../assets/carro3.jpg"
import paisagem4 from "../assets/carro4.webp"
import card1 from "../assets/card1.jpg"
import byd from "../assets/byd.webp"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import Carousel from "../components/Carousel";

const imgs = [paisagem1, paisagem2 , paisagem3 , paisagem4];

const Home=()=>{
    
    return(
        <>
        <HomeStyle>
            <h2 className="title">Seu próximo carro elétrico está aqui.</h2>
            <div className="carousel">
                <div className="slogan">
                    <h2><span>Tecnologia, </span><br />desempenho <br />e sustentabilidade <br />ao <span>seu alcance!</span></h2>
                </div>
                <Carousel imgs={imgs} />
            </div>   
            <div className="cards">
                <div className="card">
                    <img src={card1}/>
                    <div>
                        <h2>Tesla Model S Plaid</h2>
                        <h3>R$ 1.699.000</h3>
                        <p>Empowering users through captivating interfaces, turning ideas into
                        pixel-perfect realities.</p>
                        <button>Follow Account</button>
                       
                    </div>
                </div>
                <div className="card">
                    <img src={card1}/>
                    <div>
                        <h2>Tesla Model Y</h2>
                        <h3>R$ 650.000 </h3>
                        <p>Empowering users through captivating interfaces, turning ideas into
                        pixel-perfect realities.</p>
                        <button>Follow Account</button>
                    </div>
                </div>
            </div>
            <div className="cards2-grid">
                <h2 className="title">Byd <span>Seal 2024</span></h2>
                <img src={byd}/>
                <div className="cards2">
                    <label id="summary">
                        <input type="checkbox" />
                        <div className="card2">
                            <div className="front">
                                <header>
                                <h2>Cavalos</h2>
                                <span><HiOutlineDotsVertical/></span>
                                </header>
                                <var>530</var>
                                <h3>CV</h3>
                                <h4>Completed: 13</h4>
                            </div>
                            <div className="back">
                                <header>
                                <h2>Summary</h2>
                                <span><IoIosClose/></span>
                                </header>
                                <p>More Information</p>
                            </div>
                        </div>
                    </label>
                    <label id="overdue">
                        <input type="checkbox" />
                        <div className="card2">
                        <div className="front">
                            <header>
                            <h2>Velocidade Max</h2>
                            <span><HiOutlineDotsVertical/></span>
                            </header>
                            <var>180</var>
                            <h3>km/h</h3>
                            <h4>Yesterday: 9</h4>
                        </div>
                        <div className="back">
                            <header>
                            <h2>Overdue</h2>
                            <span><IoIosClose/></span>
                            </header>
                            <p>More Information</p>
                        </div>
                        </div>
                    </label>
                    <label id="features">
                        <input type="checkbox" />
                        <div className="card2">
                            <div className="front">
                                <header>
                                <h2>Features</h2>
                                <span><HiOutlineDotsVertical/></span>
                                </header>
                                <var>372</var>
                                <h3>km de autonomia</h3>
                                <h4>Implemented: 6</h4>
                            </div>
                            <div className="back">
                                <header>
                                <h2>Features</h2>
                                <span><IoIosClose/></span>
                                </header>
                                <p>More Information</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </HomeStyle>
        </>
    )
}

export default Home