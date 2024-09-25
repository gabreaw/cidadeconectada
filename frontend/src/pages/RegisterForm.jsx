import React, { useState } from "react";
import cclogo from "../assets/cc-logo.svg";
import "../styles/App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",// porta 8000? /api/ ???
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-4">
          <img src={cclogo} alt="Icone cidade Conectada" width={660}></img>
          <h2 className="text-xl font-semibold">Faça seu cadastro</h2>
        </div>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="cpf"
            placeholder="Seu CPF"
            value={formData.cpf}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative">
            <input
              type="password"
              name="senha"
              placeholder="Sua senha"
              value={formData.senha}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 00-6.32 12.906l-1.403 1.403a1 1 0 101.414 1.414l1.402-1.403A8 8 0 1010 2zm0 2a6 6 0 014.472 10.019L7.98 7.528A5.978 5.978 0 0110 4zm-4.472 8.019A5.978 5.978 0 0110 16a6 6 0 01-4.472-1.981z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirme sua senha"
              value={formData.confirmarSenha}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 00-6.32 12.906l-1.403 1.403a1 1 0 101.414 1.414l1.402-1.403A8 8 0 1010 2zm0 2a6 6 0 014.472 10.019L7.98 7.528A5.978 5.978 0 0110 4zm-4.472 8.019A5.978 5.978 0 0110 16a6 6 0 01-4.472-1.981z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Registrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-blue-500">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
