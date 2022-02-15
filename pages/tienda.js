import Layout from "../components/Layout";
import Listado from "../components/Listado";
import { guitarras } from "../API/guitarrasData.js";

const Tienda = () => {
  return (
    <Layout pagina="Tienda Virtual">
      <h1 className="heading">Nuestra Colección</h1>
      <Listado guitarras={guitarras} />
    </Layout>
  );
};

export default Tienda;
