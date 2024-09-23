import { HomeStyle } from "../css/HomeStyle"
import { useState } from "react";

const Home=()=>{
    
    return(
        <>
        <HomeStyle>
            <section>
                <h1>Titulo da loja</h1>
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1"/>
                        <input type="radio" name="radio-btn" id="radio2"/>
                        <input type="radio" name="radio-btn" id="radio3"/>
                        <input type="radio" name="radio-btn" id="radio4"/>
            
                        {/* <!-- SLIDES IMAGE --> */}
                        <div className="slide first">
                            <img src="" alt="imagem 1"/>
                        </div>
            
                        <div className="slide">
                            <img src="" alt="imagem 2"/>
                        </div>
            
                        <div className="slide">
                            <img src="" alt="imagem 3"/>
                        </div>
            
                        <div className="slide">
                            <img src="" alt="imagem 4"/>
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
                <p>Texto sobre o Tema</p>
            </section>   
        </HomeStyle>
        
        
        
        </>
    )
}

export default Home