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
    margin: 0 auto;
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: transparent;
}

.login{
    width: 400px;
    margin-left: 50px;
    background: transparent;
}
.login-form{
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