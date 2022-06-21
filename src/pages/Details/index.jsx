import { useState, useEffect } from 'react'
import {Container, Links, Content, Author } from './styles'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import {SectionBack}from '../../components/SectionBack'

//Test
import { useAuth } from '../../hooks/auth';
import { Note } from '../../components/Note'
import { FiStar, FiClock, FiX} from 'react-icons/fi'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
//Test

import { api } from '../../services/api'


export function Details({...rest}){
  const [data, setData] = useState([])

  //Test
  const { user } = useAuth();
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  //Test
  
  const params = useParams()
  const navigate = useNavigate()

  

  function handleBack(){
    navigate('/')
  }

  async function handleRemove(){
    const confirm = window.confirm('Deseja excluir o filme?')

    if(confirm){
      await api.delete(`/movies/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])


  return(
    <Container {...rest}>
      <Header/>
      
      <Content className='main' >
      <SectionBack ></SectionBack>

        
        <div className="movieRating">
          <h1>{data.title}</h1>
        <h2>
        <FiStar className={data.rating >= 1 ? "rated" : ""} />
        <FiStar className={data.rating >= 2 ? "rated" : ""} />
        <FiStar className={data.rating >= 3 ? "rated" : ""} />
        <FiStar className={data.rating >= 4 ? "rated" : ""} />
        <FiStar className={data.rating >= 5 ? "rated" : ""} />
      </h2>
        </div>
        <Author>
          <img src={avatarUrl} alt={user.name} width="20" />
          Por  <span> {user.name} </span>
          <FiClock /> {data.updated_at}
        </Author>

        {
        data.movie_tags
        &&
        <div className='tags' >
          {
          data.movie_tags.map(tag => <Tag key={tag.id} title={tag.tag_name} />)
          }
        </div>
      }

        <p>{data.description}</p>

        

      </Content>

    </Container>
  )
}