import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { entradas } from "../../API/blogsData.js";
import Layout from "../../components/Layout";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = () => {
  const router = useRouter(); //obtener id de la id
  console.log(entradas);
  return (
    <Layout pagina={"Blog"}>
      {entradas.map((entrada) => {
        if (entrada.id === router.query.id) {
          const { titulo, imagen, contenido, published_at, id } = entrada;
          console.log(entrada);
          return (
            <main key={id}>
              <h1 className="heading">{titulo}</h1>
              <article className={styles.entrada}>
                <img
                  layout="responsive"
                  width={800}
                  height={600}
                  src={imagen.src}
                  alt={`Imagen entrada ${titulo}`}
                />
                <div className={styles.contenido}>
                  <p className={styles.fecha}>{published_at}</p>
                  <p className={styles.texto}>{contenido}</p>
                </div>
              </article>
            </main>
          );
        }
      })}
    </Layout>
  );
};

export default EntradaBlog;
