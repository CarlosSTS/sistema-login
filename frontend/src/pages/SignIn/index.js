import React, { useState } from 'react'
import {Form,Input} from '@rocketseat/unform'
import * as Yup from  'yup'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowRightCircle} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css';

const schema =  Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().min(6,'No minimo 6 digitos').required('A senha é obrigatório')
});

export default function SignIn() {
  const [loading,setLoading] = useState(false)
  const history= useHistory();

  async function handleSubmit(data) {
  setLoading(true)
    try {
      const response = await api.post('/session',data)
      //localStorage.setItem('@sistemalogin:id',response.data._id)
      localStorage.setItem('@sistemalogin:userName',response.data.userName)
      history.push('/profile')
      //console.table(response.data)
    }catch(err) {
      alert('Usuário não encontrado, verifique seus dados e tente novamente.')
    }finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
     <section className="form">

       <Form schema={schema} onSubmit={handleSubmit}>
         <h1>Faça seu login</h1>

         <Input name="email" placeholder="Digite sua e-mail"/>
         <Input name="password" placeholder="digite seu senha"/>

         <button 
         style={{  backgroundColor: '#2196f3'}}
         className="button"
         type="submit">
           {loading ? 'Carregando...' : 'Acessar'}
           
           </button>
         <button 
           className="button"
           style={{backgroundColor: '#00c853'}}>
         <Link to="/register" style={{color: '#fff'}}>
             <FiArrowRightCircle size={24} color="#fff" />
            Não tenho conta
                  </Link>
         </button>

       </Form>
     </section>
    </div>
  )
}
