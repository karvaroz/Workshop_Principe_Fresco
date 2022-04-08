const listar = document.getElementById("list-group");

const traerLocalStorage = () => {
  const detalle = JSON.parse(localStorage.getItem("Detalle"));
  
  const { id, name, price, description, type, image, category } = detalle;
  listar.innerHTML += `
    <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${image}" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${name} - ${id} </h5>
                    <p class="card-text"><small class="text-muted">${price}</small></p>
                    <p class="card-text">${description}</p>
                    <p class="card-text"><small class="text-muted">${type}</small></p>
                    <p class="card-text"><small class="text-muted">${category}</small></p>
                    <butto class="btn btn-primary">Return</button>
                </div>
            </div>
        </div>
    </div>

       `;
};

document.addEventListener("DOMContentLoaded", traerLocalStorage);

listar.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("btnReturn")) {
    window.location.href = "index.html";
  }
});
