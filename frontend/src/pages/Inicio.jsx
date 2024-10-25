import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Complaint from "./complaint";
import HighlightSidebar from "../components/HighlightSidebar/HighlightSidebar";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const Inicio = () => {

  const complaints = [
    {
      id: 1,
      title: "Falta de Lombada",
      location: "Av. São Pedro",
      resultado: "Resolvida",
      image: image1, // trocar para caminho da imagem
      likes: 15,
      comments: 7,
    },
    {
      id: 2,
      title: "Esgoto Destampado",
      location: "Av. Fernando Machado",
      resultado: "Resolvida",
      image: image2, // trocar para caminho da imagem
      likes: 15,
      comments: 7,
    },
    {
      id: 3,
      title: "Poste na rua",
      location: "Av. Fernando Machado",
      resultado: "Resolvida",
      image: image3, // trocar para caminho da imagem
      likes: 15,
      comments: 7,
    },
  ];

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col justify-start items-start p-16">
          <h1 className="text-5xl mb-8 font-mulish">Cidade Conectada</h1>

          {/* Container para os quadrados de filtro */}
          <div className="flex space-x-4 mt-4">
            {/* Quadrado de Filtrar */}
            <div className="border border-black h-10 w-32 rounded-lg flex justify-start items-start p-1">
              <select className="text-sm w-full bg-white border-none outline-none">
                <option value="all">Filtrar</option>
                <option value="option1">Opção 1</option>
                <option value="option2">Opção 2</option>
                {/* Adicione outras opções conforme necessário */}
              </select>
            </div>

            {/* Quadrado de Data */}
            <div className="border border-black h-10 w-32 rounded-lg flex justify-start items-start p-1">
              <select className="text-sm w-full bg-white border-none outline-none">
                <option value="today">Hoje</option>
                <option value="yesterday">Ontem</option>
                <option value="lastWeek">Última Semana</option>
                {/* Adicione outras opções conforme necessário */}
              </select>
            </div>
          </div>
          <div className="ml-24">
            {/* Linha vermelha com bolinha e texto */}
            <div className="relative mt-24 w-full space-y-6">
              {/* Bolinha e texto */}
              <div className="absolute -top-12 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span className="text-black text-lg">Reclamações</span>
              </div>
              {/* Linha vermelha */}
              <div className="border-t-2 border-red-600 w-full mt-3"></div>
            </div>

            <div className="border h-[291px] w-[531px] rounded-lg mt-6">
              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="bg-white rounded-lg shadow-md p-4 mb-6 border"
                >
                  <div className="bg-green-100 text-green-600 px-2 py-1 inline-block rounded-md mb-2">
                    {complaint.resultado}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">{complaint.title}</h3>
                  <p className="text-gray-600 mb-4">{complaint.location}</p>

                  <div className="mb-4">
                    <img
                      src={complaint.image}
                      alt={complaint.title}
                      className="rounded-md w-[270px] h-[125px]"
                    />
                  </div>

                  <div className="flex justify-between items-center text-gray-600">
                    <span>&#x2764; {complaint.likes} Curtidas</span>
                    <span>&#x1F4AC; {complaint.comments} Comentários</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <HighlightSidebar />
      </div>
    </>
  );
};

export default Inicio;
