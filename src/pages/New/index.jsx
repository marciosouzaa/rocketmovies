import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Form } from './styles'

export function New(){
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }


  async function handleNewNote(){
    if(!title){
      return alert('Digite o título do filme')
    }

    if(!rating || rating==""){
      return alert('Avalie o filme de 0 a 5')
    }
    if(Number(rating) < 0 || Number(rating) > 5){
      return alert("Digite uma nota entre 0 e 5")
    }
    if(!description || description==""){
      return alert("Digite a descrição")
    }

    if(newTag=="" && tags==""){
      return alert('Digite a tag Lucas')
    }
    if(newTag){
      return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio')
    }

    await api.post('/movies', {
      title, rating, description, tags
    })

    alert('Nota criada com sucesso!')
    navigate('/')
  }
  async function handleRemoveNote(){
    navigate('/new')
  }

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft/>voltar</Link>
            <h1>Novo filme</h1>
          </header>
          <div className="titlerating">
          <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
          <Input placeholder="Sua nota(de 0 a 5)" onChange={e => setRating(e.target.value)} />
          </div>

          <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

          <h2> Marcadores </h2>

          <section className="Marcadores">
            <div className='tags'>
              
              <NoteItem isNew placeholder="Nova tag" onChange={e => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag} />
              
              {
                tags.map((tag, index) => (
                <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                ))
              }

            </div>
          </section>
          <div className="buttons" onClick={handleRemoveNote}>
            <button className="buttonDelete" title='Excluir filme'>Excluir filme</button>
          <Button title="Adicionar filme" onClick={handleNewNote} ></Button>
            </div>    
        </Form>
      </main>
    </Container>
  )
}