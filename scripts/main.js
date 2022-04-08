import { getData } from "./getData.js";
import ListarApi from "./ListarApi.js";

const api = "https://api-principe-fresco.herokuapp.com/clothing";

const listarProductos = document.querySelectorAll(".list-group");

document.addEventListener("DOMContentLoaded", async () => {

  const arrayProductos = await getData(api);
  ListarApi(arrayProductos, listarProductos);
});

listarProductos[0].addEventListener("click", async (e) => {
  const idBoton = e.target.id;

  if (idBoton) {
    const data = await getData(api);
    const DetalleProducto = data.find((array) => array.id === Number(idBoton));
    console.log(DetalleProducto);
    localStorage.setItem("Detalle", JSON.stringify(DetalleProducto));
    window.location.href = "/pages/detail.html";
  }
});
