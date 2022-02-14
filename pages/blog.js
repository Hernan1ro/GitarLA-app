import Layout from "../components/Layout";
import Entrada from "../components/Entrada";
import { entradas } from "../API/blogsData.js";

const Blog = () => {
  return (
    <Layout pagina="Blog Virtual">
      {entradas.map((entrada) => (
        <Entrada entrada={entrada} />
      ))}
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
