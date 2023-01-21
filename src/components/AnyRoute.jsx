import image from "../images/not-found.jpg";
import { Link } from "react-router-dom";

function AnyRoute() {
  return (
    <>
      <div className="flex justify-center items-center mt-48 font-semibold text-xl">
        <img src={image} className="w-52 h-auto" />
        Lo siento, pagina no encontrada.
        <Link to="/Portofolio" className="btn btn-active btn-ghost ml-3">Volver</Link>
      </div>
    </>
  );
}

export default AnyRoute;
