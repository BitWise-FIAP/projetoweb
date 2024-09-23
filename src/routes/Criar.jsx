import { CriarStyle } from "../css/CriarStyle";
import { useParams, Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Criar=()=>{

    let {id} = useParams();

    // manipular a variavel
    const [usuarios, setUsuarios]=useState({
        id,
        usuario:"",
        senha:""
    });

    const navigate = useNavigate();

    const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]:e.target.value})
    }

    let metodo = "post"
    if(id){
        metodo = "put"
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    fetch(`http://localhost:5001/usuarios/${id ? id:""}`,{
        method: metodo,
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(usuarios),
    }).then (()=>{
        navigate("/login");
    })
    };

    return(
        <>
        <CriarStyle>
            <section className="usuario">
                <h1>Cadastrar Usuários</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="usuario"
                    value={usuarios.usuario}
                    placeholder="Digite o nome de usuário"
                    onChange={handleChange}
                    />

                    <input
                    type="password"
                    name="senha"
                    value={usuarios.senha}
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    />
                    
                    <button type="submit" onSubmit={handleSubmit}>Cadastrar</button>
                </form>
            </section>
        </CriarStyle>
        </>
    )
}

export default Criar