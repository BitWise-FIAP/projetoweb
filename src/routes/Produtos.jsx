import { Link } from "react-router-dom"
import { useRef } from "react";

const Produtos=()=>{
    return(
        <>
            <h1>lista de produtos</h1>
            <Link to={sessionStorage.getItem("usuario") ? "/cadastrarProduto" : "/login"}>Cadastrar</Link>
        </>
    )
}

export default Produtos