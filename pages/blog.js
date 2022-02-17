import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

const Blog = () => {
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <ListadoBlog />
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
