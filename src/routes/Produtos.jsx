import "../css/global.css"
import { Link,useNavigate } from "react-router-dom"
import { useState,useEffect,useRef } from "react";
import { ProdutosStyle } from "../css/ProdutosStyle";

const Produtos=()=>{

    const navigate = useNavigate();
    const newProdHandler=()=>{
        if(sessionStorage.getItem("usuario")){
            navigate("/cadastrarProduto")
        }
        else{
            navigate("/login")
            alert("Você precisa fazer o login antes de acessar a página cadastros!")
        }
    }

    const [produtos,setProdutos] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5001/produtos/").then((resposta)=>{
            return resposta.json();
        })
        .then((resposta)=>{
            setProdutos(resposta)
        })
    },[])
    return(
        <>
        <ProdutosStyle>
            <section className="content">
                <div className="header">
                    <div className="texto">
                        <h2>Produtos Registrados</h2>
                        <span>Deseja cadastrar um novo produto? </span>
                    </div>
                    <button type="button" onClick={newProdHandler}>Cadastrar</button>
                </div>
                <div className="formulario">
                    <ul>
                        {produtos.map((produto, index) => (
                            <li key={index}>
                                <label>{index+1} - {produto.nome}: R${produto.preco}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </ProdutosStyle>
        </>
    )
}

export default Produtos