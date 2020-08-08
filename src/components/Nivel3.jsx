import React from 'react'

function n3 (props) { 
return (
<div>
  <h3>Nivel3 {props.nomes[2]}</h3>
  <h4>9000</h4>
  <button onClick={()=>(props.funcRemove('carla'))}>remove Carla</button>
  <button onClick={()=>(props.funcAdiciona(11000))}>Adiciona salario</button>
</div>
)
 }

export default n3;