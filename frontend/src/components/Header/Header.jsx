import React from "react";
import Logo from "./icones/Logo.svg";
import Notificacao from "./icones/Notificacao.svg";
import Pesquisa from "./icones/Pesquisa.svg";
import Foto from "./icones/Foto.svg";
import flechaEsquerda from "./icones/flechaEsquerda.svg";
import flechaBaixo from "./icones/flechaBaixo.svg";

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center px-11 h-[89px] border-b border-grayColor">
      <div className="flex items-center justify-start border-r-2 border-grayColor h-full w-[228px]">
        
        <img src={Logo} alt="Logo Cidade Conectada" className="w-7 h-7 mr-2" />
        <h1 className="text-xl font-semibold">CC</h1>
        <button className="mr-4">
          <img
            src={flechaEsquerda}
            alt="Ocultar barra lateral"
            className="w-5 h-5"
          ></img>
        </button>
      </div>
      <div className="relative flex-grow flex items-center mx-2 ml-40">
        <input
          className="bg-[#DBDBDB] rounded-lg pl-12 py-2 w-full max-w-md"
          placeholder="Pesquisar..."
        />
        <img
          src={Pesquisa}
          alt="Barra de pesquisa"
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <div className="flex items-center p-6">
        <img src={Notificacao} alt="Notificacao" className="w-7 h-7 mr-4" />
        <div className="flex flex-col items-center mx-4 flex-grow">
          <h1 className="text-lg font-medium">Amanda Gerhard</h1>
          <h1 className="text-sm">SC, Chapecó</h1>
        </div>
        <img src={Foto} alt="Foto de perfil" className="w-12 h-12 ml-4" />
        <button>
          <img src={flechaBaixo} alt="Menu" className="w-7 h-7 mr-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
