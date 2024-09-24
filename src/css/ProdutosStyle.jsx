import styled from "styled-components";
export const ProdutosStyle = styled.section`

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
.content{
    height: 90vh;
}
.header{
    display: grid;
    justify-content: center;
}
.texto{
    font-size: 1.5rem;
    padding: 2vh;
}
.header button{
    font-size: 1rem;
    width: 100%;
    height: 50px;
    border-radius: 20px;
    background: #213550 ;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.5s;
}
.header button:hover{
    background: blue;
}
.formulario{
    display: grid;
    justify-content: center;
    padding: 5vh;
    
}
.formulario ul{
    list-style: none;
    font-family: cursive;
    text-transform: capitalize;
    color: var(--color3);
    border: solid;
    padding: 5vh;
}
`