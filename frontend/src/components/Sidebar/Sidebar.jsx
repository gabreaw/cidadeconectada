import React from "react";
import Inicio from "./icones/inicio.svg";
import criarReclamacao from "./icones/criar-reclamacao.svg";
import admPublico from "./icones/adm-publico.svg";
import perfil from "./icones/perfil.png";
import configuracoes from "./icones/configuracoes.png";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white flex flex-col border-grayColor p-6 gap-y-6 border-r w-[271px]">
        <div className="bg-white flex flex-col p-6 border-b border-grayColor w-full ">
          <ul className="flex flex-col gap-y-6">
            <li className="flex items-center ">
              <img src={Inicio} alt="Inicio" className="w-6 h-6 mr-2" />
              <span className="font-semibold">Inicio</span>
            </li>
            <li className="flex items-center ">
              <img
                src={criarReclamacao}
                alt="Criar Reclamação"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Criar Reclamação</span>
            </li>
            <li className="flex items-center ">
              <img
                src={admPublico}
                alt="Adm. Públicos"
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Adm. Públicos</span>
            </li>
            <li className="flex items-center ">
              <img src={perfil} alt="perfil" className="w-6 h-6 mr-2" />
              <span className="font-semibold">Perfil</span>
            </li>
            <li className="flex items-center">
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
        <h2 className="text-lg font-semibold">Minhas reclamações</h2>
        <div className="bg-white flex flex-col border-grayColor p-6 gap-y-2 w-full">
          <ul>
            <li className="flex items-center justify-between">
              <div className="">
                <h3 className="font-semibold">Problema na rua</h3>
                <p className="font-semibold">Buraco na pista</p>
                <p className="font-semibold">Arvore caída</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
