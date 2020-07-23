import React from 'react';
import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>

      <Comentario name="João" email="joao@mail.com" data={new Date(2020,3,19)}>
        Olá, tudo bem?
      </Comentario>
      
      <Comentario name="Maria" email="maria@mail.com" data={new Date(2020,3,19)} >
        Olá, tudo bem sim
      </Comentario>
    </div>
  )
}

export default App;
