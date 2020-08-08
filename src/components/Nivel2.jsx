import React from 'react'
import N3 from './Nivel3'

function n2 (props) { 
  return (
    <div>
      <h2>Nivel2 {props.nomes[1]}</h2>
      <button onClick={()=>(props.funcRemove('ferrari'))}>remove Ferrari</button>
      <button onClick={()=>(props.funcAdiciona(10000))}>Adiciona salario</button>

      <N3 nomes={props.nomes} funcRemove={props.funcRemove} funcAdiciona={props.funcAdiciona}/>
    </div>
  )
 }

export default n2;