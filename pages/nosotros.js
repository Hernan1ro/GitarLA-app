import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina={"Nosotros"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              excepturi architecto deserunt minus cupiditate illum officia at
              nobis laudantium vel sint aspernatur nihil porro neque accusantium
              alias odit, ea, commodi quas! Laboriosam tenetur repellat est,
              molestiae ea voluptates delectus ex porro, dolor, doloribus
              repudiandae voluptatibus expedita suscipit praesentium ab officia?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              excepturi architecto deserunt minus cupiditate illum officia at
              nobis laudantium vel sint aspernatur nihil porro neque accusantium
              alias odit, ea, commodi quas! Laboriosam tenetur repellat est,
              molestiae ea voluptates delectus ex porro, dolor, doloribus
              repudiandae voluptatibus expedita suscipit praesentium ab officia?
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
