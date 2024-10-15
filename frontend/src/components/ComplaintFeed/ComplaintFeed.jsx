import React from 'react';
import complaintImage from "./images/complaintImage.svg"
import { FaHeart, FaComment } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineSend } from 'react-icons/ai';

const ComplaintCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-lg mx-auto p-6">
      <div className="flex items-center mb-4">
        <AiOutlineUser className="w-10 h-10 rounded-full bg-gray-300 p-2" />
        <div className="ml-3">
          <h3 className="text-lg font-semibold">Amanda Gerhard</h3>
          <p className="text-sm text-gray-500">Bairro Efapi</p>
        </div>
      </div>
      <img
        src={complaintImage}
        alt="Foto de buracos na rua"
        className="w-full h-56 object-cover rounded-md"
      />
      <div className="flex items-center justify-between mt-4 text-gray-600">
        <div className="flex items-center space-x-2">
          <FaHeart />
          <span>15 Curtidas</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaComment />
          <span>6 Comentários</span>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <AiOutlineUser className="w-8 h-8 bg-gray-200 p-1 rounded-full" />
        <input
          type="text"
          placeholder="Escreva aqui seu comentário"
          className="flex-grow ml-2 px-4 py-2 border rounded-md focus:outline-none"
        />
        <AiOutlineSend className="ml-2 text-blue-500 cursor-pointer" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          <AiOutlineUser className="w-6 h-6 bg-gray-300 p-1 rounded-full" />
          <p className="bg-gray-100 rounded-md p-2 w-full">
            Realmente está muito ruim nesta rua
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineUser className="w-6 h-6 bg-gray-300 p-1 rounded-full" />
          <p className="bg-gray-100 rounded-md p-2 w-full">
            Precisam arrumar urgentemente
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintCard;
