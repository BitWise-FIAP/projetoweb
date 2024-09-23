import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";



const Footer=()=>{
    return(
        <>
        <h5>@2024 - Todos direitos reservados</h5>
        <a href="#fbook"><FaFacebookSquare/></a>
        <a href="#instagram"><SlSocialInstagram/></a>
        <a href="#linkedin"><SlSocialLinkedin/></a>
        <a href="#email"><TfiEmail/></a>
        


        </>
    )
}

export default Footer