import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import HighlightSidebar from "../components/HighlightSidebar/HighlightSidebar";
import image1 from "../images/image1.png";

const Reclamacao = () => {
  const navigate = useNavigate();

  // Estado para os dados do formulário de nova reclamação
  const [newComplaint, setNewComplaint] = useState({
    title: "",
    categoria: "",
    endereco: "",
    data: "",
    descricao_problema: "",
    resultado: "Pendente",
    image: image1, // Imagem padrão (pode ser alterada conforme necessário)
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComplaint((prev) => ({ ...prev, [name]: value }));
  };

  // Função para cadastrar a nova reclamação
  const addComplaint = (e) => {
    e.preventDefault();
    console.log("Nova reclamação cadastrada:", newComplaint);

    // Resetando o formulário após o envio
    setNewComplaint({
      title: "",
      categoria: "",
      endereco: "",
      data: "",
      descricao_problema: "",
      resultado: "Pendente",
      image: image1,
    });
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col items-center justify-center w-full p-16">
          <h1 className="text-5xl mb-8 font-mulish">Cidade Conectada</h1>

          {/* Formulário de Cadastro de Reclamação */}
          <form onSubmit={addComplaint} className="p-6 border rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Cadastrar Nova Melhoria</h2>
            <p  className="mb-4 text-center" >Sua melhoria é importante para a cidade!</p>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Título</label>
              <input
                type="text"
                name="title"
                value={newComplaint.title}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Categoria</label>
              <select
                name="categoria"
                value={newComplaint.categoria}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
                required
              >
                <option value="">Selecione uma categoria</option>
                <option value="Estradas">Estradas</option>
                <option value="Energia">Energia</option>
                <option value="Iluminação">Iluminação</option>
                <option value="Água">Água</option>
                <option value="Saneamento Básico">Saneamento Básico</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Endereço</label>
              <input
                type="text"
                name="endereco"
                value={newComplaint.endereco}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Data</label>
              <input
                type="date"
                name="data"
                value={newComplaint.data}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Descrição do Problema</label>
              <textarea
                name="descricao_problema"
                value={newComplaint.descricao_problema}
                onChange={handleInputChange}
                className="border p-2 w-full rounded h-32" // Aumentei a altura para 32 (pode ajustar conforme necessário)
                placeholder="Digite sua melhoria aqui!" // Adicionado o placeholder
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Adicionar Reclamação
            </button>
          </form>
        </div>
        <HighlightSidebar />
      </div>
    </>
  );
};

export default Reclamacao;
