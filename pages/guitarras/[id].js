import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { guitarras } from "../../API/guitarrasData";
import styles from "../../styles/Guitarra.module.css";
import Layout from "../../components/Layout";

const Producto = ({ guardarCarrito, carrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const [guitarra, setGuitarra] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    if (cantidad < 0) {
      alert("Cantidad no válida");
      return;
    }
    e.preventDefault();
    const { imagen, nombre, precio, id } = guitarra;
    //Guardar datos en carrito
    const objGuitarra = {
      imagen,
      nombre,
      precio,
      id,
      cantidad,
    };
    guardarCarrito(objGuitarra);
  };
  const selectGuitarra = (cantidad) => {
    setCantidad(cantidad);
  };
  return (
    <>
      {guitarras.map((guitarra) => {
        if (guitarra.id === router.query.id) {
          const { imagen, nombre, descripcion, precio, id } = guitarra;
          return (
            <Layout key={id} pagina={`Guitarra ${nombre}`}>
              <div className={styles.guitarra}>
                <Image
                  layout="responsive"
                  width={380}
                  height={800}
                  src={imagen.src}
                  alt={`Imagen Guitarra ${nombre}`}
                />
                <div className={styles.contenido}>
                  <h3>{nombre}</h3>
                  <p className={styles.descripcion}>{descripcion}</p>
                  <p className={styles.precio}>${precio}</p>
                  <form
                    onSubmit={handleSubmit}
                    action=""
                    className={styles.formulario}
                  >
                    <label htmlFor="cantidad">Cantidad:</label>
                    <select
                      value={cantidad}
                      onChange={(e) => selectGuitarra(Number(e.target.value))}
                      name="cantidad"
                      id=""
                    >
                      <option value="">--Seleccione una cantidad--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                    <input
                      onClick={() => setGuitarra(guitarra)}
                      type="submit"
                      value="Agregar al carrito"
                    />
                  </form>
                </div>
              </div>
            </Layout>
          );
        }
      })}
    </>
  );
};

export default Producto;
