import React from 'react'
import N2 from './Nivel2'
 function n1 (props) { 
   return (
   <div>
     <h1>Nivel1 {props.nomes[0]}</h1>

     <button onClick={()=>(props.funcRemove('hugo'))}>remove hugo</button>
    <button onClick={()=>(props.funcAdiciona(8000))}>Adiciona salario</button>
      
    <N2 nomes={props.nomes} funcRemove={props.funcRemove} funcAdiciona={props.funcAdiciona}/>
   </div>
   )
  }

 export default n1;