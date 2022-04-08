const ListarApi = async (arrayProductos, pintarHTML) => {
  arrayProductos.forEach((producto) => {
    const { id, name, price, image } = producto;

    pintarHTML[0].innerHTML += 
    `
      <div class="card text-center" style="width: 20rem;">
        <img class="card-img-top" src="${image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">$ ${price}</p>
          <a id="${id}" class="btn btn-primary btnDetalle">Detalle</a>
        </div>
      </div> 
    `;
  });
};

export default ListarApi;
