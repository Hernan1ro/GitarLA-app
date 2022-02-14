import Image from "next/image";
import Link from "next/link";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, contenido, imagen, published_at, id } = entrada;
  console.log(entrada);

  return (
    <article>
      <Image
        layout="responsive"
        width={800}
        height={600}
        src={imagen}
        alt={`imagen blog ${titulo}`}
      />
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
