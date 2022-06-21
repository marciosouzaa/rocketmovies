import { Container } from "./styles";
import { Button } from "../Button";
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowLeft} from 'react-icons/fi'



export function SectionBack({ title, children}){
  return(
    <Container>
     <Link to='/'>
     <FiArrowLeft/>
        Voltar
      </Link>      
    </Container>
  )
}