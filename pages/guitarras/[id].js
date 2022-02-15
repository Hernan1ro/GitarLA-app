import Image from "next/image";
import { useRouter } from "next/router";
import { guitarras } from "../../API/guitarrasData";
import styles from "../../styles/Guitarra.module.css";
import Layout from "../../components/Layout";

const Producto = () => {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <>
      {guitarras.map((guitarra) => {
        if (guitarra.id === router.query.id) {
          const { imagen, nombre, descripcion, precio, id } = guitarra;
          return (
            <Layout key={id} pagina={`Guitarra ${nombre}`}>
              <div className={styles.guitarra}>
                <Image
                  layout="responsive"
                  width={380}
                  height={800}
                  src={imagen.src}
                  alt={`Imagen Guitarra ${nombre}`}
                />
                <div className={styles.contenido}>
                  <h3>{nombre}</h3>
                  <p className={styles.descripcion}>{descripcion}</p>
                  <p className={styles.precio}>${precio}</p>
                </div>
              </div>
            </Layout>
          );
        }
      })}
    </>
  );
};

export default Producto;
