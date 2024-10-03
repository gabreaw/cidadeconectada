import React from "react";

const complaints = [
  {
    id: 1,
    title: "Falta de Lombada",
    location: "Av. São Pedro",
    image: "/path/to/image1.jpg", // trocar para caminho da imagem
    likes: 15,
    comments: 7,
  },
  {
    id: 2,
    title: "Esgoto Destampado",
    location: "Av. Fernando Machado",
    image: "/path/to/image2.jpg", // trocar para caminho da imagem
    likes: 15,
    comments: 7,
  },
  {
    id: 3,
    title: "Poste na rua",
    location: "Av. Fernando Machado",
    image: "/path/to/image3.jpg", // trocar para caminho da imagem
    likes: 15,
    comments: 7,
  },
];

const HighlightSidebar = () => {
  return (
    <div className="w-[271px] p-6 border-l border-gray-200 bg-white">
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
