import React, { useState } from 'react';
import axios from 'axios';

const Registro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: '',  // Campo de senha adicionado
  });

  const [message, setMessage] = useState('');

  // Função para lidar com a mudança de valores no input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para enviar os dados do formulário para a API
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      const response = await axios.post('http://localhost:4444/usuarios', formData);
      
      // Sucesso: exibindo uma mensagem de sucesso
      setMessage('Usuário registrado com sucesso!');
      console.log(response.data); // Aqui você pode ver o retorno da API

      // Limpar o formulário após o envio
      setFormData({ nome: '', email: '', cpf: '', senha: '' });
    } catch (error) {
      // Se houver um erro, exiba a mensagem de erro
      setMessage('Erro ao registrar o usuário.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registro de Usuário</h2>
      {message && <p>{message}</p>} {/* Exibindo mensagem de sucesso/erro */}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Senha:</label>  {/* Campo de senha */}
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
