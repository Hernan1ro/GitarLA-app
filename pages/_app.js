import { useState, useEffect } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);
  //Guardar carrito
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
  //Modificar productos del carrito
  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });
    setCarrito(carritoActualizado);
  };
  // Eliminar productos del carrito
  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((articulo) => articulo.id !== id);
    setCarrito(carritoActualizado);
  };
  //Traer carrito de localStorage
  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoLS);
  }, []);
  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      guardarCarrito={guardarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  );
}

export default MyApp;
