import "../css/global.css"
import { Link,useNavigate,useParams } from "react-router-dom"
import { useState,useEffect,useRef } from "react"
import { CadastrarProdutoStyle } from "../css/CadastrarProdutoStyle";

const CadastrarProduto=()=>{
    const navigate = useNavigate();
    
    let {id} = useParams();
    const [novoProduto, setNovoProduto]=useState({
        id,
        nome:"",
        preco:""
    });

    const handleChange=(e)=>{
        setNovoProduto({...novoProduto,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    fetch(`http://localhost:5001/produtos/${id ? id:""}`,{
        method: id ? "put" : "post",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(novoProduto),
    }).then (()=>{
        navigate("/produtos");
    })
    };

    return(
        <>
        <CadastrarProdutoStyle>
            <section className="corpo">
                <section className="content">
                    <h1>Cadastrar novo produto</h1>
                    <form className="div-input" onSubmit={handleSubmit}>
                        <input className="caixa-input" type="text" name="nome" placeholder="Nome do produto" onChange={handleChange}/>
                        <input className="caixa-input" type="number" name="preco" placeholder="Preço do produto" onChange={handleChange}/>
                        <div className="botao">
                            <button className="botao-cadastro" type="submit">Cadastrar</button>   
                        </div> 
                    </form>
                </section>
            </section>
        </CadastrarProdutoStyle>
        </>
    )
}

export default CadastrarProduto