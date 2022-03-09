import { useState } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);
  const guardarCarrito = (elemento) => {
    setCarrito([...carrito, elemento]);
  };
  return (
    <Component
      {...pageProps}
      carrito={carrito}
      guardarCarrito={guardarCarrito}
    />
  );
}

export default MyApp;
