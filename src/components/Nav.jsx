import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"
import fundo from "../assets/fundo-nav.png"
const Nav=()=>{
    return(
        <>
        <NavStyle>
            <div className="nav-container">
                <img className="img1" src={fundo}></img>
                
                <nav>
                    <ul>
                        <li><Link to="/"><p>Home</p></Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                    
                    
                    
                    
                </nav>
            </div>
        </NavStyle>
        
        </>
    )
}

export default Nav