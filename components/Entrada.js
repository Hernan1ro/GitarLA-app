import React from "react";
import Link from "next/link";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, contenido, imagen, published_at, id } = entrada;
  console.log(entrada);

  return (
    <article>
      <div>
        <h1>{titulo}</h1>
        <p>{published_at}</p>
        <p>{resumen}</p>
        <Link href={`/blog/${id}`}>Leer Post</Link>
      </div>
    </article>
  );
};

export default Entrada;
