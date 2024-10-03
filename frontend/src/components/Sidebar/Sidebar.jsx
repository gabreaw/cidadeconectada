import React from "react";
import { Link } from "react-router-dom";
import Inicio from "./icones/inicio.svg";
import criarReclamacao from "./icones/criar-reclamacao.svg";
import admPublico from "./icones/adm-publico.svg";
import perfil from "./icones/perfil.png";
import configuracoes from "./icones/configuracoes.png";
import mais from "./icones/mais.svg"

const Sidebar = () => {
  return (
    <>
      <div className="bg-white flex flex-col border-grayColor p-6 gap-y-6 border-r w-[271px]">
        <div className="bg-white flex flex-col p-6 border-b border-grayColor w-full ">
          <ul className="flex flex-col gap-y-6 ">
            <li className="flex items-center hover:bg-lightBlue">
              <img src={Inicio} alt="Inicio" className="w-6 h-6 mr-2" />
              <span className="font-semibold ">Inicio</span>
            </li>
            <li className="flex items-center hover:bg-lightBlue">
              <img
                src={criarReclamacao}
                alt="Criar Reclamação"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Criar Reclamação</span>
            </li>
            <li className="flex items-center hover:bg-lightBlue">
              <img
                src={admPublico}
                alt="Adm. Públicos"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold ">Adm. Públicos</span>
            </li>
            <li className="flex items-center hover:bg-lightBlue focus:bg-red-600">
              <img src={perfil} alt="perfil" className="w-6 h-6 mr-2" />
              <span className="font-semibold">Perfil</span>
            </li>
            <li className="flex items-center hover:bg-lightBlue">
              <img
                src={configuracoes}
                alt="Configurações"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Configurações</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white flex flex-col border-grayColor p-6 gap-y-2 border-r w-[271px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Minhas reclamações</h2>
          {/* Usar icone (biblioteca vuesax) */}
          <button>
            <img src={mais} alt="Expandir minhas reclamações" className="w-4 h-4"></img>
          </button>
        </div>

        <ul>
          <li className="mb-2">
            <Link
              to="/login"
              className="flex items-center px-4 py-2 rounded-md font-semibold hover:bg-lightBlue"
            >
              <span className="text-greenColor mr-2">&#9679;</span>
              Problema de Rua
            </Link>

            <Link
              to="/"
              className="flex items-center px-4 py-2 rounded-md font-semibold hover:bg-lightBlue checked:bg-red-600"
            >
              <span className="text-orange-500 mr-2 ">&#9679;</span>
              Buraco na pista
            </Link>

            <Link
              to="/login"
              className="flex items-center px-4 py-2 rounded-md font-semibold hover:bg-lightBlue"
            >
              <span className="text-purple-200 mr-2">&#9679;</span>
              Árvore caída
            </Link>
          </li>
        </ul>
        <div className="mt-8 p-4 bg-grayColor rounded-lg text-center font-semibold">
          <div className="flex justify-center mb-2">
            <span className="text-yellow-500 text-2xl">&#x1F4A1;</span>
          </div>
          <h3 className="text-base font-bold">Notícias</h3>
          <p className="text-sm font-bold">Notícias da cidade</p>
          <Link
            to="/login"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Acessar Notícia
          </Link>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Sidebar;
