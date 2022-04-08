const ListarApi = async (arrayProductos, pintarHTML) => {
  console.log(pintarHTML[0]);

  arrayProductos.forEach((producto) => {
    const { id, name, price, image } = producto;

    pintarHTML[0].innerHTML += `
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${image}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text"><small class="text-muted">$ ${price}</small></p>
              <a id="${id}" class="btn btn-primary">Detalle</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};

export default ListarApi;
