import styled from "styled-components";
import imgnav from "../assets/fundo-nav2.avif"
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

nav{
    padding: 15px;
    background: url(${imgnav});
    background-size:cover ;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav ul{
    width: 70vh;
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
    gap: 30px;
    padding: 15px;
    border-radius: 50px;
    backdrop-filter: blur(6px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    border: 2px solid rgba(255, 255, 255, .18);
    transition: .7s all ease-in-out;
   
}

nav ul:hover{
    backdrop-filter: blur(20px);
    transition: .7s all ease-in-out;
}

nav ul li{
    transition: .2s all ease-in-out;
    
}

nav ul li:hover{
    transition: .2s all ease-in-out;
    transform: translateY(-4px);
    
}

nav ul li a{
    text-decoration: none;
    color: var(--color1);
    font-size: 30px;
    transition: all .2s ease-in-out;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family:'Times New Roman', Times, serif;
    font-weight: bold;
}

nav ul li a:hover{
    color: var(--color7);
}
    


`