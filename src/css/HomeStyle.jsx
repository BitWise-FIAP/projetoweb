import styled from "styled-components";

export const HomeStyle = styled.section`

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

.slider{
    margin: 0 auto;
    width: 100%;
    height: 800px;
    overflow: hidden;
}

.slides{
    width: 400%;
    height: 800px;
    display: flex;
}

.slides input{
    display: none;
}

.slide{
    width: 25%;
    position: relative;
    transition: 2s;
}

.slide img{
    width: 100%;
    height: 100%;
    filter: brightness(95%);
}

.manual-navigation{
    position: absolute;
    width: 100%;
    margin-top: -40px;
    display: flex;
    justify-content: center;
}

.manual-btn{
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
}

.manual-btn:not(:last-child){
    margin-right: 40px;
}

.manual-btn:hover{
    background-color: #fff;
}

#radio1:checked ~ .first{
    margin-left: 0;

}

#radio2:checked ~ .first{
    margin-left: -25%;

}

#radio3:checked ~ .first{
    margin-left: -50%;

}

#radio4:checked ~ .first{
    margin-left: -75%;

}

.navigation-auto div{
    border: 2px solid #20a6ff;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
}

.navigation-auto{
    position: absolute;
    width: 100%;
    margin-top: 760px;
    display: flex;
    justify-content: center;
}

.navigation-auto div:not(:last-child){
    margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1{
    background-color: #fff;
}

#radio2:checked ~ .navigation-auto .auto-btn2{
    background-color: #ffffff;
}

#radio3:checked ~ .navigation-auto .auto-btn3{
    background-color: #fff;
}

#radio4:checked ~ .navigation-auto .auto-btn4{
    background-color: #fff;
}    
   /* Fim dos estilos do slideShow */
.title{
    display: flex;
    margin: 2vh;
    justify-content: center;
}
.title h1{
    font-family: cursive;
    font-size: 2rem;
    color: var(--color1);
    text-decoration: underline;
    text-shadow: 3px 2px var(--color2);
}
.content{
    height: 50vh;
}
p{
    margin: 3vh;
    font-family: cursive;
    text-align: center;
    font-size: 2rem;
    color: var(--color1);
    text-shadow: 3px 2px var(--color2);
}

`