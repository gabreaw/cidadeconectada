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
        <div className="bg-white flex flex-col p-6 gap-y-6 border-b border-grayColor w-full">
          <ul className="flex flex-col gap-y-6">
            <li className="flex items-center ">
              <img src={Inicio} alt="Inicio" className="w-6 h-6 mr-2" />
              <span>Inicio</span>
            </li>
            <li className="flex items-center ">
              <img
                src={criarReclamacao}
                alt="Criar Reclamação"
                className="w-6 h-6 mr-2"
              />
              <span>Criar Reclamação</span>
            </li>
            <li className="flex items-center ">
              <img
                src={admPublico}
                alt="Adm. Públicos"
                className="w-6 h-6 mr-2"
              />
              <span>Adm. Públicos</span>
            </li>
            <li className="flex items-center ">
              <img src={perfil} alt="perfil" className="w-6 h-6 mr-2" />
              <span>perfil</span>
            </li>
            <li className="flex items-center">
              <img
                src={configuracoes}
                alt="Configurações"
                className="w-6 h-6 mr-2"
              />
              <span>Configurações</span>
            </li>
          </ul>
          
        </div>
      </div>
      <div>
        <p>oi</p>
      </div>
    </>
  );
};

export default Sidebar;
