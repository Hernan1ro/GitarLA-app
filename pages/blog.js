import { useEffect } from "react";
import Layout from "../components/Layout";

const Blog = ({ entradas }) => {
  useEffect(() => {
    async function consultarAPI() {
      const url1 = "http://localhost:1337/api/blogs";
      const url2 =
        "https://pixabay.com/api/?key=8502071-1f57c63cc805c2d86e5bf513a&q=guitar";
      const promesas = [fetch(url1), fetch(url2)];
      const respuesta = await Promise.all(promesas);
      const resultado = await console.log(respuesta);
      console.log(resultado);
    }
    consultarAPI();
  }, []);
  return (
    <Layout pagina="Blog Virtual">
      <h1>Desde Blog</h1>
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
