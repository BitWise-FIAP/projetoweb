import "../css/global.css"
import { useNavigate, Link } from "react-router-dom"
import { useEffect, useRef, useState} from "react"
import { LoginStyle } from "../css/LoginStyle";
import background from "../assets/img-login3.jpg"

const Login=()=>{
    // usando useRef para identificar os elementos
    const usuario = useRef();
    const senha = useRef();

    // usando useState para alterar a variavel (criando array para diversos usuarios)
    const [usuarios, setUsuarios]= useState();

    // criando useNavigate para redirecionar para CadastrarProdutos
    const navigate = useNavigate();

    // validando o login
    function validade (){
        for(let i=0; i<usuarios.length; i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){ 
                return true;
            }
        }
    }

    // previnindo o estado padrao da pagina
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(validade()){
            let token = 
            Math.random().toString(16).substring(2)+
            Math.random().toString(16).substring(2)
            sessionStorage.setItem("usuario", usuario)
            sessionStorage.setItem("senha",token)
            navigate("/cadastrarProduto")
        }else{
            alert("usuario/senha inválidos")
        }
    }

    useEffect(()=>{
        //acessar a api e trazer os dados
        fetch("http://localhost:5001/usuarios")

        //promessa
        .then((resposta)=>{
            return resposta.json();
        })

        .then((resposta)=>{
            setUsuarios(resposta)
        })
    },[])

    return(
        <>
        <LoginStyle>
            <section className="container">
                <img src={background} />
                <div className="login">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <span className="titulo">Faça seu login</span>

                        <div className="div-input">
                            <input
                                type="text"
                                className="caixa-input"
                                placeholder="Digite o nome do usuário"
                                id="usuario"
                                ref={usuario}
                            />
                        </div>

                        <div className="div-input">
                            <input
                                type="password"
                                className="caixa-input"
                                placeholder="Digite sua senha"
                                id="senha"
                                ref={senha}
                            />
                        </div>
                        
                        <div className="div-botao">
                            <button type="submit" className="botao-login">login</button>
                        </div>

                        <ul className="utilidades">
                            <li>
                                <a href="#">Esqueceu sua senha?</a>
                            </li>
                            <li>
                                <span className="texto-utilidade">Não possui conta? </span>
                                <Link to="/criar">Criar</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        </LoginStyle>
        </>
    )
}

export default Login