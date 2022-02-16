import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import { guitarras } from "../API/guitarrasData.js";

export default function Home() {
  return (
    <Layout pagina="Inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso />
    </Layout>
  );
}
