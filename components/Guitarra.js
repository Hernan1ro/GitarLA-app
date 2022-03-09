import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
  const { nombre, descripcion, id, precio, imagen } = guitarra;

  return (
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
        <Link href={`/guitarras/${id}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
