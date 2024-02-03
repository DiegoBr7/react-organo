import Formulario from './componentes/Formulario/index'
import Banner from './componentes/Banner';
import React, { useState } from 'react';
import Time from './componentes/Time'
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#09f7e9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82Cffa',
      corSecundaria:'#e8f8ff'
    },
    {
      nome:'Mobile',
      corPrimaria:'#a6d157',
      corSecundaria:'#f0f2e2'
    },
    {
      nome:'Devops' ,
      corPrimaria:'#e06869',
      corSecundaria:'#fde7e8'
    },
    {
      nome:'Data Science' ,
      corPrimaria:'#db6ebf',
      corSecundaria:'#fae9f3'
    },
    {
      nome:'Ux e Design' ,
      corPrimaria:'#ffba05',
      corSecundaria:'#fff5f9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#ff8a29',
      corSecundaria:'#ffeedf'
    }
  ] 

const [colaboradores , setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) =>{
debugger
setColaboradores([...colaboradores , colaborador])
}


  return (
    <div className="App">
      <Banner />
      <Formulario times = {times.map(time => time.nome)} aoColaboradorCadastrado={Colaborador => aoNovoColaboradorAdicionado(Colaborador)}  />
     {
     times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)
     }
  <Rodape/>
    </div>
  );
}

export default App;
