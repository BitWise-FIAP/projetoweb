import "../css/global.css"
import { HomeStyle } from "../css/HomeStyle"
import "../css/global.css"
import { useState } from "react";
import preservar from "../assets/preservando-entre-geracoes.jpg"
import paisagem1 from "../assets/paisagem-1.jpg"
import paisagem2 from "../assets/paisagem-2.jpg"
import paisagem3 from "../assets/paisagem-3.jpg"
import paisagem4 from "../assets/paisagem-4.jpg"
import card1 from "../assets/card1.jpg"

const Home=()=>{
    
    return(
        <>
        <HomeStyle>
            <section>
                <div className="title">
                    <h1>Promova a sustentabilidade do meio ambiente!</h1>
                </div>
                
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1"/>
                        <input type="radio" name="radio-btn" id="radio2"/>
                        <input type="radio" name="radio-btn" id="radio3"/>
                        <input type="radio" name="radio-btn" id="radio4"/>
            
                        {/* <!-- SLIDES IMAGE --> */}
                        <div className="slide first">
                            <img src={preservar} alt="imagem 1"/>
                        </div>
            
                        <div className="slide">
                            <img src={paisagem1} alt="imagem 2"/>
                        </div>
            
                        <div className="slide">
                            <img src={paisagem2} alt="imagem 3"/>
                        </div>
            
                        <div className="slide">
                            <img src={paisagem3} alt="imagem 4"/>
                        </div>
                        {/* <!-- FIM SLIDES --> */}
            
                        {/* <!-- NAVIGATION AUTO --> */}
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                    </div>
        
                    <div className="manual-navigation">
                        <label htmlFor="radio1" className="manual-btn"></label>
                        <label htmlFor="radio2" className="manual-btn"></label>
                        <label htmlFor="radio3" className="manual-btn"></label>
                        <label htmlFor="radio4" className="manual-btn"></label>
                    </div>
                </div>
                <div className="content">
                    <p>O meio ambiente anda em grande degradação, estamos presenciando queimadas, diminuição da qualidade do ar, falta de chuvas, aquecimento global, aumento do nivel dos oceanos e muito mais. Dessa forma, devemos contribuir para um futuro mais sustentável para que as próximas gerações (e a nossa própria) consiga ter um futuro com maior qualidade e expectativa de vida.</p>
                </div>
            </section>
            <div className="cards">
                <div className="card">
                    <img src={card1}/>
                    <div>
                        <h2>Tesla Model S Plaid</h2>
                        <h3>UX Developer</h3>
                        <p>Empowering users through captivating interfaces, turning ideas into
                        pixel-perfect realities.</p>
                        <button>Follow Account</button>
                    </div>
                </div>
                <div className="card">
                    <img src={card1}/>
                    <div>
                        <h2>Tesla Model S Plaid</h2>
                        <h3>UX Developer</h3>
                        <p>Empowering users through captivating interfaces, turning ideas into
                        pixel-perfect realities.</p>
                        <button>Follow Account</button>
                    </div>
                </div>
            </div>
            <div className="cards2-grid">
                <div className="cards2">
                    <label id="summary">
                        <input type="checkbox" />
                        <div className="card2">
                            <div className="front">
                                <header>
                                <h2>Summary</h2>
                                <span className="material-symbols-outlined"> more_vert </span>
                                </header>
                                <var>21</var>
                                <h3>Due Tasks</h3>
                                <h4>Completed: 13</h4>
                            </div>
                            <div className="back">
                                <header>
                                <h2>Summary</h2>
                                <span className="material-symbols-outlined"> close </span>
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
                            <h2>Overdue</h2>
                            <span className="material-symbols-outlined"> more_vert </span>
                            </header>
                            <var>17</var>
                            <h3>Projects</h3>
                            <h4>Yesterday: 9</h4>
                        </div>
                        <div className="back">
                            <header>
                            <h2>Overdue</h2>
                            <span className="material-symbols-outlined"> close </span>
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
                                <span className="material-symbols-outlined"> more_vert </span>
                                </header>
                                <var>38</var>
                                <h3>Proposals</h3>
                                <h4>Implemented: 6</h4>
                            </div>
                            <div className="back">
                                <header>
                                <h2>Features</h2>
                                <span className="material-symbols-outlined"> close </span>
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