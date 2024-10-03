import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import HighlightSidebar from "../components/HighlightSidebar/HighlightSidebar";

const Inicio = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <HighlightSidebar />
      </div>
    </>
  );
};

export default Inicio;
