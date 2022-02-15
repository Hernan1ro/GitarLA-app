import { v4 as uuidv4 } from "uuid";
import guitarra_01 from "../public/img/guitarra_01.jpg";

export const entradas = [
  {
    id: uuidv4(),
    nombre: "Pasos para aprender a tocar guitarra",
    descripcion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quo fugit, earum fugiat aliquid voluptatibus. Ducimus, porro? Maiores quos quasi alias in dolore.",
    precio: 200,
    imagen: guitarra_01,
  },
];
