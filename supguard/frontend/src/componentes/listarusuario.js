import React, { useEffect, useState } from 'react';

function UsuarioList() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/usuarios', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setUsuarios(data);
        };

        fetchUsuarios();
    }, []);

    return (
        <ul>
            {usuarios.map((user) => (
                <li key={user.id}>{user.nome} - {user.email}</li>
            ))}
        </ul>
    );
}

export default UsuarioList;
