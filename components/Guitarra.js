import Link from "next/link";
import Image from "next/image";

const Guitarra = ({ guitarra }) => {
  const { nombre, descripcion, id, precio, imagen } = guitarra;
  return (
    <div>
      <Image
        layout="responsive"
        width={500}
        height={350}
        src={imagen.src}
        alt={`Imagen Guitarra ${nombre}`}
      />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <Link href={`/guitarras/${id}`}>Ver producto</Link>
      </div>
    </div>
  );
};

export default Guitarra;
