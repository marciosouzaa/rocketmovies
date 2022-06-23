import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
import { FiStar, FiClock, FiX} from 'react-icons/fi'
import { Container, Author } from "./styles";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import {Tag} from '../Tag'

export function Note({data, ...rest}){
  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente excluir este filme?");

    if (confirm){
      await api.delete(`/movies/${data.id}`);
      location.reload();
    }
  }
  
  return(
    <Container {...rest}>
      <h1>{data.title} </h1>

      {/* <Author>
        <img src={avatarUrl} alt={user.name} width="20" />
        Por  <span> {user.name} </span>
        <FiClock /> {data.updated_at}
      </Author> */}

      <h2>
        <FiStar className={data.rating >= 1 ? "rated" : ""} />
        <FiStar className={data.rating >= 2 ? "rated" : ""} />
        <FiStar className={data.rating >= 3 ? "rated" : ""} />
        <FiStar className={data.rating >= 4 ? "rated" : ""} />
        <FiStar className={data.rating >= 5 ? "rated" : ""} />
      </h2>

      <p>{data.description}</p>

      {
        data.movie_tags
        &&
        <footer>
          {
          data.movie_tags.map(tag => <Tag key={tag.id} title={tag.tag_name} />)
          }
        </footer>
      }
    </Container>
  )
}