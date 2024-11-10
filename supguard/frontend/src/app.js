import React from 'react';
import UsuarioForm from './components/UsuarioForm';
import UsuarioList from './components/UsuarioList';

function App() {
  return (
    <div className="App">
      <h1>SupGuard - Gerenciamento de Usuários</h1>
      <UsuarioForm />
      <UsuarioList />
    </div>
  );
}

export default App;
