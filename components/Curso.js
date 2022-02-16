import styles from "../styles/Curso.module.css";
import Image from "next/image";
import Link from "next/link";
import cursos_bg from "../public/img/cursos_bg.jpg";

const Curso = () => {
  return (
    <section>
      <div className="contenedor">
        <div>
          <h2>Aprende a tocar guitarra</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, optio
            tempore. Architecto veniam quisquam odit tempora accusamus?
            Consequuntur, quisquam quod eveniet id veniam eos accusantium!
          </p>
          <a href="#">Más información</a>
        </div>
      </div>
      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0/ 0.65),
                rgb(0 0 0 /0.7)
              ),
              url(${cursos_bg.src});
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </section>
  );
};

export default Curso;
