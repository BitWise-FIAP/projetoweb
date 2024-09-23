import styled from "styled-components";

export const NavStyle = styled.section`
    
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
.img1{
    object-fit: none;
    position: absolute;
    height: 9vh;
    width: 100%;
    filter: brightness(80%)
}

.nav-container{
    width: 100%;
    height: 9vh;
    background-color: var(--color7);
    position: relative;
}
nav ul{
    display: flex;
    margin-left: 65%;
    justify-content: space-around;
    padding-top: 2%;
    list-style: none;
}
nav a{
    text-decoration: none;
    position: absolute;
    color: var(--color1);
    font-size: 30px;
    transition: all .2s ease-in-out;
}
nav a:hover{
    transition: .2s all ease-in-out;
    transform: translateY(-4px);
    color: var(--color7);
}
    


`