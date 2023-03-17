import { useContext } from "react";
import { Context } from "../Context/context.js";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

const corchete_left = "{";
const corchete_right = "}";
function Body() {
  let contex = [];
  contex = useContext(Context);

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="w-96 p-6 text-center h-auto text-4xl font-semibold text-black"
          id="Contenido"
        >
          <p className="text-left text-4xl"> {corchete_left} </p>
          Hola, soy<span className="text-purple-600"> Andrés Fernández, </span>
          actualmente estudiante de Ingenieria y este es mi portafolio donde
          muestro mis avances como desarrollador.{" "}
          <p className="text-right text-4xl"> {corchete_right} </p>
        </div>
      </div>
      <div className="flex gap-3 text-black justify-center items-center text-2xl">
        <a href="https://www.instagram.com/andressfv_" className="mb-8">
          <BsInstagram />
        </a>
        <a href="https://github.com/andresshz" className="mb-8">
          <BsGithub />
        </a>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {contex.map((elemento, i) => {
          return (
            <div key={i}>
              <img src={elemento.path} className="w-32 h-28" />
              <label htmlFor={elemento.nombre} className="btn btn-xs w-full">
                {elemento.nombre}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Body;
