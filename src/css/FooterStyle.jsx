import styled from "styled-components";

export const FooterStyle = styled.section`
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

.footer-container{
    display: grid;
    justify-content: center;
    padding: 2vh;
    background-color: var(--color3);
    height: 10vh;
}
.footer-container h5{
    color: var(--color7);
    font-size: 1.2rem
}
.icons{
    display: flex;
    justify-content: center;
    gap: 15px;
}
.icons a{
    color: var(--color7);
}


`