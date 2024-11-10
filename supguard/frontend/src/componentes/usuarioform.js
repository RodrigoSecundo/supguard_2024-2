import React, { useState } from 'react';

function UsuarioForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        });
        const data = await response.json();
        if (response.ok) {
            alert('Usuário criado com sucesso!');
        } else {
            alert(data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
            <button type="submit">Criar Usuário</button>
        </form>
    );
}

export default UsuarioForm;

