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
    height: 100vh;
}
.content p{
    margin: 3vh;
    font-family: cursive;
    text-align: center;
    font-size: 2rem;
    color: var(--color1);
    text-shadow: 3px 2px var(--color2);
}

.cards{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: 100vh;
    padding: 50px;
    background: #221d2d;
    color: #fdfcfd;
    gap: 80px;
}

.card{
  display: flex;
  align-items: center;
  width: 75vw;
  max-width: 650px;
  padding: 50px 30px 50px 20px;
  background: #121017;
  border-radius: 24px;
}

.card img {
  max-width: 280px;
  width: 35vw;
  height: 300px;
  object-fit: cover;
  margin-left: -60px;
  margin-right: 30px;
  border-radius: inherit;
  box-shadow: 0 60px 40px rgb(0 0 0 / 8%);
}

.card h2 {
  font-size: 26px;
  font-weight: 400;
  margin-top: 0;
  margin-right: 30px;
  margin-bottom: 10px;
}

.card h3 {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  opacity: 0.75;
}

.card p {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 30px;
  opacity: 0.5;
}

.card button {
  border: 1px solid #f8f8f8;
  background: transparent;
  color: #f8f8f8;
  padding: 16px 26px;
  font-size: 16px;
  border-radius: 40px;
  cursor: pointer;
  transition: all .05s ease-in-out;
}

.card button:active{
    scale: 1.03;
    
}

@media (width <= 1400px){
    .cards{
        height: auto;
    }
}

@media (width <= 600px) {
    .cards{
        padding: 70px;
        gap: 90px;

    }
    .card {
        margin: 0 40px;
        padding-left: 50px;
        padding-right: 50px;
        padding-bottom: 60px;
        width: 100%;
        text-align: center;
        flex-direction: column;
    }

    .card h2 {
        margin-right: 0;
        font-size: 26px;
    }

    .card img {
        margin: -100px 0 30px 0;
        width: 100%;
        max-width: 1000px;
        height: 250px;
    }

    .card p {
        max-width: 360px;
    }
}

@media (width <= 440px) {
  .card img {
    height: 45vw;
    width: 45vw;
    border-radius: 50%;
    margin: -140px 0 30px 0;
  }
}

.cards2-grid{
    margin: 0;
    height: 100vh;
    display: grid;
    place-items: center;
    color: #f7f7f7;
    background: #121212;
    }

.cards2-grid h2, h3, h4 {
  margin: 0;
  font-weight: 500;
}

.cards2 {
  display: flex;
  gap: 30px;
}

.card2 {
  position: relative;
  perspective: 1000px;
  width: 300px;
  height: 300px;
}

.card2 header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 26px;
}

.card2 header h2 {
  font-size: 20px;
}

.card2 .front,
.card2 .back {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  background: #1e1e1e;
  border-radius: 10px;
  padding: 36px 36px 44px 44px;
  transition: 0.6s;
  cursor: pointer;
}

.back {
  transform: rotateY(180deg);
}

input {
  position: absolute;
  scale: 0;
}

input:checked ~ .card2 .back {
  transform: rotateY(0);
}

input:checked ~ .card2 .front {
  transform: rotateY(-180deg);
}

.card2 var {
  font-style: normal;
  font-size: 80px;
  line-height: 1;
}

.card2 h3 {
  margin: 0 0 30px;
  font-weight: 500;
}

#summary :is(var, h3) {
  color: #3b82f6;
}

#overdue :is(var, h3) {
  color: #e56363;
}

#features :is(var, h3) {
  color: #25b697;
}

.card2 :is(h4, p) {
  opacity: 0.6;
  font-size: 20px;
}

.card2 p {
  margin-top: 76px;
}


`