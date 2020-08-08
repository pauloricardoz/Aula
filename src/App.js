import React from 'react';
import logo from './logo.svg';
import './App.css';
import N1 from './components/Nivel1'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomes: ['hugo', 'ferrari', 'carla'],
      total: 0,
    }
    this.removeUm= this.removeUm.bind(this)
    this.salario= this.salario.bind(this)
  }
  removeUm(nome) {
    let arr = this.state.nomes;
    arr=arr.filter(elemento => elemento !== nome)
    this.setState({nomes: arr})
  }
  salario(sal) {
    let montante = this.state.total;
    this.setState({total: montante+sal})
  }
  render(){
   return (
     <div>
       <span>Total: {this.state.total}</span>
      <N1 nomes={this.state.nomes} funcRemove={this.removeUm} funcAdiciona={this.salario}/>
      <br/>
      {/* <button onClick={()=>(this.removeUm('ferrari'))}>remove 1</button>
      <button onClick={()=>(this.salario(9000))}>Adiciona salario</button> */}
     </div>
   )
 }z
}

export default App;
