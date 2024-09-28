import styled from "styled-components";
export const LoginStyle = styled.section`

:root{
    --color1:#fff;
    --color2:#000;
    --color3:#134563;
    --color4:#817278;
    --color5:#4f698c;
    --color6:#5c748e;
    --color7:#8a9fb4;
    --color7:#ccc;
    
}

.container{
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    background: #050C12;;
}

.container img{
    width: 100vh;
    height: auto;
}

.login{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 50px 0 50px 0;
}

.login-form{
    background-color: var(--color1);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}

.titulo{
    display: block;
    font-size: 2.3rem;
    line-height: 1.4;
    text-align: center;

}

.div-input{
    width: 100%;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid #d9d9d9;
}

.div-input:hover{
    border-bottom:2px solid blue;
}

.caixa-input{
    font-size: 1rem;
    color: #555;
    line-height: 1.4;
    display: block;
    width: 100%;
    padding: 0 5px;
    border: none;
    outline: 0;
}
.div-botao{
    width: 100%;
    display: flex;
    justify-content: center;
}
.botao-login{
    font-size: 1rem;
    width: 100%;
    height: 50px;
    border-radius: 20px;
    background: #213550 ;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.5s;
}
.botao-login:hover{
    background: blue;
}
.utilidades{
    margin-top: 20px;
    margin-bottom: 20px;
}
.texto-utilidade{
    font-size: 1rem;
    color: var(--color2);

}
`