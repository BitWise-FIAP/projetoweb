import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"
import fundo from "../assets/fundo-nav.png"

const Nav=()=>{
    return(
        <>
        <NavStyle>
                <nav>
                    <ul>
                        <li><Link to="/"><p>Home</p></Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
        </NavStyle>
        
        </>
    )
}

export default Nav