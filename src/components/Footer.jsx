import { BiGlassesAlt } from "react-icons/bi";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
        <div>
          <p className="text-7xl">
            <BiGlassesAlt />
          </p>
          <p>
            Andrés Fernández
            <br />
            Desarrollador de Software
          </p>
        </div>
        <div>
          <span className="footer-title">Redes sociales</span>
          <div className="grid grid-flow-col gap-4 text-lg">
            <a href="https://www.instagram.com/andressfv_" className="mb-8">
              <BsInstagram />
            </a>
            <a href="https://github.com/andresshz" className="mb-8">
              <BsGithub />
            </a>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
