import { useState, useEffect } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  const guardarCarrito = (elemento) => {
    const hayCarrito = carrito.some((item) => item.id === elemento.id);
    if (hayCarrito) {
      const carritoActualizado = carrito.map((articulo) => {
        if (articulo.id === elemento.id) {
          articulo.cantidad = elemento.cantidad;
        }
        return articulo;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, elemento]);
    }
  };

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      guardarCarrito={guardarCarrito}
    />
  );
}

export default MyApp;
