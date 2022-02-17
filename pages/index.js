import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import { guitarras } from "../API/guitarrasData.js";
import ListadoBlog from "../components/ListadoBlog";

export default function Home() {
  return (
    <Layout pagina="Inicio" guitarra={guitarras[3]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso />
      <section className="contenedor">
        <ListadoBlog blogs={3} />
      </section>
    </Layout>
  );
}
