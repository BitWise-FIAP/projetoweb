import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FooterStyle } from "../css/FooterStyle";



const Footer=()=>{
    return(
        <>
        <FooterStyle>
            <section className="footer-container">
                <h5>@2024 - Todos direitos reservados</h5>
                <div className="icons">
                    <a href="#fbook"><FaFacebookSquare/></a>
                    <a href="#instagram"><SlSocialInstagram/></a>
                    <a href="#linkedin"><SlSocialLinkedin/></a>
                    <a href="#email"><TfiEmail/></a>
                </div>
            </section>
        </FooterStyle>
        </>
    )
}

export default Footer