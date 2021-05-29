import React,{useState} from 'react'
import {Form,Input} from '@rocketseat/unform'
import * as Yup from  'yup'
import api from '../../services/api'

import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeftCircle} from 'react-icons/fi'

import './styles.css';

const schema =  Yup.object().shape({
  userName: Yup.string().min(3,'No mínimo 3 letras').required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().min(6,'No mínimo 6 digitos').required('A senha é obrigatório')
})

export default function SignUp() {
  const [loading,setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(data) {  
    setLoading(true)
    try {
      const response = await api.post('/user',data)
      //console.table(response.data)
      history.push('/profile')
       alert(`Seu cadastro foi um sucesso ${response.data.userName}`)
      
    }catch(err) {
       alert(`O email ${data.email} já está cadastrado`)
    }finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
     <section className="form">

       <Form schema={schema} onSubmit={handleSubmit}>
         <h1>Faça seu cadastro</h1>

         <Input name="userName" placeholder="Digite seu nome"/>
         <Input name="email" placeholder="Digite sua e-mail"/>
         <Input name="password" placeholder="digite seu senha"/>

         <button 
         style={{  backgroundColor: '#2196f3'}}
          className="button" type="submit">
            {loading ? 'Carregando...' : 'Cadastrar'}
            </button>
         <button className="button" style={{backgroundColor: '#00c853'}}>
         <Link to="/" style={{color: '#fff'}}>
             <FiArrowLeftCircle size={24} color="#fff" />
            Voltar para login
                  </Link>
         </button>

       </Form>
     </section>
    </div>
  )
}
