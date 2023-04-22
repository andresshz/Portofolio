import { useEffect, useState } from "react";
import { TbAsteriskSimple } from "react-icons/tb";
import data from "../data/timeline";

const Timeline = () => {
  const [conocimientos, setConocimientos] = useState([]);
  useEffect(() => {
    setConocimientos(data);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="w-2/3 border-l-4 border-gray-800 pl-10">
          <h1 className="text-3xl font-semibold">Estudios</h1>
          <br />
          <p>
            <span className="font-semibold flex">
              <TbAsteriskSimple />
              Colegio Don Bosco: 2019 - 2021:{" "}
            </span>{" "}
            Fui estudiante de bachillerato del Colegio Don Bosco, cursando la
            carrera Tecnico Vocacional en Desarrollo de Software.
          </p>
          <br />
          <p>
            <span className="font-semibold flex">
              <TbAsteriskSimple />
              Universidad Don Bosco: 2022 : Actualmente
            </span>{" "}
            Estudiante actual en la Universidad Don Bosco, con la carrera
            Tecnico en Ingenieria en Ciencias de la Computación culminada, y
            continuando en la carrera de Ingenieria en Ciencias de la
            Computación.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <div className="w-2/3 border-l-4 border-gray-800 pl-10">
          <h1 className="text-3xl font-semibold">Experiencia</h1>
          <br />
          {conocimientos.map((elemento, i) => (
            <div key={i}>
              <p>
                <span className="font-semibold flex">
                  <TbAsteriskSimple />
                  {elemento.Lugar}
                </span>{" "}
                {elemento.Actividades}
              </p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
