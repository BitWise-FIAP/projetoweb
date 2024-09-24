import styled from "styled-components";

export const CadastrarProdutoStyle = styled.section`
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
.corpo{
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
.content{
    padding: 2vh;
}
.content h1{
    display: flex;
    justify-content: center;
    font-size: 2.3rem;
}

.caixa-input{
    font-size: 1rem;
    color: #555;
    line-height: 1.4;
    width: 100%;
    padding: 0 5px;
    margin-top: 1.5vh;
    border: none;
    outline: 0;
    
}
.botao{
    width: 100%;
    display: flex;
    justify-content: center;
}
.botao-cadastro{
    margin-top: 2vh;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    border-radius: 20px;
    background: #213550 ;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.5s;
}
.botao-cadastro:hover{
    background: blue;
}
    
`