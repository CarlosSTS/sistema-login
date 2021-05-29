import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

import {FiPower} from 'react-icons/fi'
import './styles.css'
export default function Dashboard() {
  //desistruturação
  const {push} =  useHistory() 
  //const userId =  localStorage.getItem('@sistemalogin:id')
  const userName =  localStorage.getItem('@sistemalogin:userName')
  const [loading,setLOading] = useState(false)

   function handleLogout() {
    setLOading(true)
     localStorage.clear()
    setLOading(false)
    push('/')
  }

  return (
    <div className="dashborad-container">
       <div>
      <h1>Olá {userName}</h1>
  
      <button
           className="button" 
           onClick={handleLogout}
           style={{backgroundColor: '#e02040'}}>
             <FiPower 
             size={32} 
             color="#fff"
              />
             {loading ? 'Saindo...' : 'Sair'}
         </button>

         </div>
    </div>
  )
}
