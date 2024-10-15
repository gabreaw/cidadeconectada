import React from "react";
import complaintImage from "./images/complaintImage.svg"

const ComplaintFeed = () => {
  return (
    <div className="container w-fit">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5">
          <p>Amanda Gerhard</p>
          <h2 className="text-xl font-semibold">Buraco Na Rua</h2>
          <p className="text-sm text-gray-500">Bairro Efapi</p>
        </div>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">
            <img src={complaintImage} alt="Rua com buraco" width={400}></img>
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-center space-x-4">
            <span className="text-red-500">❤️ 15 Curtidas</span>
            <span className="text-gray-500">💬 6 Comentários</span>
          </div>
          <input
            type="text"
            placeholder="Escreva aqui seu comentário"
            className="mt-4 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="mt-3 space-y-2">
            <p>Realmente está muito ruim nesta rua</p>
            <p>Precisam arrumar urgentemente</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintFeed;
