import Layout from "../components/Layout";
import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";
import { entradas } from "../API/blogsData.js";

const Blog = () => {
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

//Para hacer fetch a imagenes estaticas
// export async function getStaticProps() {
//   const url = "http://localhost:1337/api/blogs";
//   const respuesta = await fetch(url);
//   const entradas = await respuesta.json();
//   console.log(entradas);

//   return {
//     props: { entradas },
//   };
// }

export default Blog;
