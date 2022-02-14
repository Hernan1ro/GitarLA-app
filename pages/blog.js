import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Entrada from "../components/Entrada";

const Blog = () => {
  const [entradas, setEntradas] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    async function consultarAPI() {
      const url1 = "http://localhost:1337/api/blogs";
      const url2 =
        "https://pixabay.com/api/?key=8502071-1f57c63cc805c2d86e5bf513a&q=guitar";
      const promesas = [fetch(url1), fetch(url2)];
      const respuesta = await Promise.all(promesas);
      const resultado1 = await respuesta[0].json();
      const resultado2 = await respuesta[1].json();
      setEntradas(resultado1);
      setImagenes(resultado2);
    }
    consultarAPI();
  }, []);
  // console.log(entradas.data);
  return (
    <Layout pagina="Blog Virtual">
      {console.log(entradas.data)}
      {entradas.data.attributes.map((entrada) => console.log(entrada))}
      {/* <Entrada entradas={entradas} /> */}
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
