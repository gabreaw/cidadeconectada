import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import HighlightSidebar from "../components/HighlightSidebar/HighlightSidebar";
import adminPhoto from "../images/adminfoto.jpg"; // Importe a foto do administrador ou use um link

const AdminProfile = () => {
  // Informações do administrador
  const [adminInfo] = useState({
    name: "João Silva",
    photo: adminPhoto, // Foto do administrador
    resolvedComplaints: 12,
    unresolvedComplaints: 5,
    ongoingComplaints: 8,
  });

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col items-center justify-center w-full p-16">
          <h1 className="text-5xl mb-8 font-mulish">Perfil do Administrador</h1>

          {/* Informações do Administrador */}
          <div className="p-6 border rounded-lg w-full max-w-lg shadow-md bg-white">
            <div className="flex flex-col items-center text-center">
              {/* Foto do Administrador */}
              <img
                src={adminInfo.photo}
                alt="Foto do Administrador"
                className="w-32 h-32 rounded-full mb-4"
              />

              {/* Nome do Administrador */}
              <h2 className="text-2xl font-bold mb-2">{adminInfo.name}</h2>
              <p className="text-gray-600 mb-4">Administrador da Cidade Conectada</p>

              {/* Estatísticas de Reclamações */}
              <div className="w-full text-left space-y-2">
                <p className="text-lg font-semibold text-gray-700">
                  Reclamações Resolvidas:{" "}
                  <span className="font-bold text-green-600">{adminInfo.resolvedComplaints}</span>
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  Reclamações Não Resolvidas:{" "}
                  <span className="font-bold text-red-600">{adminInfo.unresolvedComplaints}</span>
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  Reclamações em Andamento:{" "}
                  <span className="font-bold text-yellow-600">{adminInfo.ongoingComplaints}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Área para futuras reclamações vinculadas */}
          <div className="mt-8 p-6 border rounded-lg w-full max-w-lg bg-gray-100">
            <h2 className="text-xl font-bold mb-4">Reclamações Atreladas ao Administrador</h2>
            <p className="text-gray-600">
              Em breve, as reclamações vinculadas ao administrador aparecerão aqui.
            </p>
          </div>
        </div>
        <HighlightSidebar />
      </div>
    </>
  );
};

export default AdminProfile;
