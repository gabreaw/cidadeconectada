import React from "react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

const complaints = [
  {
    id: 1,
    title: "Falta de Lombada",
    location: "Av. São Pedro",
    image: image1, // trocar para caminho da imagem
    likes: 15,
    comments: 7,
  },
  {
    id: 2,
    title: "Esgoto Destampado",
    location: "Av. Fernando Machado",
    image: image2, // trocar para caminho da imagem
    likes: 15,
    comments: 7,
  },
  { 
    id: 3,
    title: "Poste na rua",
    location: "Av. Fernando Machado",
    image: image3, // trocar para caminho da imagem
    likes: 15,
    comments: 7,
  },
];

const HighlightSidebar = () => {
  return (
    <div className="w-[401px] p-6 border-l border-gray-200 bg-white ml-auto">
      <h2 className="text-lg font-semibold mb-4">Reclamações Resolvidas</h2>
      <div className="border-t-2 border-green-500 w-full mb-6"></div>

      {complaints.map((complaint) => (
        <div
          key={complaint.id}
          className="bg-white rounded-lg shadow-md p-4 mb-6 border"
        >
          <div className="bg-green-100 text-green-600 px-3 py-1 inline-block rounded-md mb-2">
            Resolvida
          </div>

          <h3 className="text-xl font-bold text-gray-800">{complaint.title}</h3>
          <p className="text-gray-600 mb-4">{complaint.location}</p>

          <div className="mb-4">
            <img
              src={complaint.image}
              alt={complaint.title}
              className="rounded-md w-full"
            />
          </div>

          <div className="flex justify-between items-center text-gray-600">
            <span>&#x2764; {complaint.likes} Curtidas</span>
            <span>&#x1F4AC; {complaint.comments} Comentários</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightSidebar;
