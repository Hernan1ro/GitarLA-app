import Layout from "../components/Layout";
import { guitarras } from "../API/guitarrasData.js";

const Tienda = () => {
  return (
    <Layout pagina="Tienda Virtual">
      <h1 className="heading">Nuestra Colección</h1>
      {guitarras.map((guitarra) => console.log(guitarra))}
    </Layout>
  );
};

export default Tienda;
