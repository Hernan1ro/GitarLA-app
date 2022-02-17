import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = ({ guitarra }) => {
  console.log(guitarra);
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image
                src="/img/logo.svg"
                width={400}
                height={100}
                alt="Page logo"
              />
            </a>
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
        {guitarra && (
          <div>
            <h1>Model {guitarra.nombre}</h1>
            <p>{guitarra.descripcion}</p>
            <p>${guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.id}`}>
              <a>Ver producto</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
