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
        <a href="" className="mb-8">
          <BsInstagram />
        </a>
        <a href="" className="mb-8">
          <BsGithub />
        </a>
        <a href="" className="mb-8">
          <MdAttachEmail />
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

              <input type="checkbox" id={elemento.nombre} className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{elemento.nombre}</h3>
                  <p className="py-4">
                    {elemento.descripcion}
                  </p>
                  <div className="modal-action">
                    <label htmlFor={elemento.nombre} className="btn">
                      OK
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Body;
