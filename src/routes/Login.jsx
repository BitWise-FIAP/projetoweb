import { useNavigate } from "react-router-dom"
import { useRef, useState} from "react"

const Login=()=>{
    // usando useRef para identificar os elementos
    const usuario = useRef();
    const senha = useRef();

    // usando useState para alterar a variavel (criando array para diversos usuarios)
    const [usuarios, setUsuarios]= useState([]);

    // criando useNavigate para redirecionar para CadastrarProdutos
    const navigate = useNavigate();

    // validando o login
    function validade (){
        for(let i=0; i<usuarios.length; i++){
            if(
                usuarios[i].usuario== usuario.current.value &&
                usuarios[i].usuario== usuario.current.value
            ){
                return true;
            }
        }
    }
    
    return(
        <>
        
        </>
    )
}

export default Login