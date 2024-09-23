import "../css/global.css"
import { Link,useNavigate,useParams } from "react-router-dom"
import { useState,useEffect,useRef } from "react"

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
            <h1>Cadastrar novo produto</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" placeholder="Nome do produto" onChange={handleChange}/>
                <input type="number" name="preco" placeholder="Preço do produto" onChange={handleChange}/>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default CadastrarProduto