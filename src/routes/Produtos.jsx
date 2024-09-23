import { Link,useNavigate } from "react-router-dom"
import { useState,useEffect,useRef } from "react";

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
            <h2>Produtos Registrados</h2>
            <span>Deseja cadastrar um novo produto? </span>
            <button type="button" onClick={newProdHandler}>Cadastrar</button>

            <ul>
                {produtos.map((produto, index) => (
                    <li key={index}>
                        <label>{produto.nome} R${produto.preco}</label>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Produtos