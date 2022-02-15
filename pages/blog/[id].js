import { useRouter } from "next/router";
import { entradas } from "../../API/blogsData.js";

const EntradaBlog = () => {
  const router = useRouter();
  const entrada = entradas.filter((entrada) => entrada.id === router.query.id);
  console.log(entrada);
  return <div>EntradaBlog</div>;
};

export default EntradaBlog;
