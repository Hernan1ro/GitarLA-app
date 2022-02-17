import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";
import { entradas } from "../API/blogsData.js";

const ListadoBlog = ({ blogs }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {entradas.map((entrada, index) => {
          if (index >= blogs && blogs) {
            return;
          }
          return <Entrada key={entrada.id} entrada={entrada} />;
        })}
      </div>
    </>
  );
};

export default ListadoBlog;
