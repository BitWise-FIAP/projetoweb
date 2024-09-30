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
    padding: 12px;
    background: url(${imgnav});
    background-size: cover;
    background-position: 50% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: fixed;
    width: 100%;
    z-index: 10; */
}

nav ul{
    width: 80vh;
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
    gap: 30px;
    padding: 15px;
    border-radius: 50px;
    backdrop-filter: blur(12px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    border: 2px solid rgba(255, 255, 255, .18);
    transition: .7s all ease-in-out;
}

nav ul:hover{
    backdrop-filter: blur(2px);
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
    color: var(--color7);
    font-size: 30px;
    transition: all .2s ease-in-out;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
}

nav ul li a:hover{
    color: var(--color1);
}
    

`