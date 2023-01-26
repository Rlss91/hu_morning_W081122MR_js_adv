let propertiesArr;
let listDiv;
let isAdmin;
//this function will transfer data from homepage to this page
const initialPropertiesList = (propertiesArrFromHomePage, isAdminParam) => {
  listDiv = document.getElementById("home-page-properties-list");
  isAdmin = isAdminParam;
  updatePropertiesList(propertiesArrFromHomePage);
};

const updatePropertiesList = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new list.
    if the list already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createList();
};

const createItem = (name, description, price, img) => {
  const adminBtns = `
  <button type="button" class="btn btn-warning w-100">
    <i class="bi bi-pen-fill"></i> Edit
  </button>
  <button type="button" class="btn btn-danger w-100">
    <i class="bi bi-x-circle-fill"></i> Delete
  </button>
  `;
  return `
  <li class="list-group-item">
    <div class="row">
        <div class="col-md-2">
        <img src="${img}" class="img-fluid" alt="${name}" />
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
            ${price}
            </h6>
            <p class="card-text">
            ${description}
            </p>
        </div>
        </div>
        <div class="col-md-2">
        <button type="button" class="btn btn-success w-100">
          <i class="bi bi-currency-dollar"></i> Buy now
        </button>
        ${isAdmin ? adminBtns : ""}
        </div>
    </div>
    </li>
  `;
};

const createList = () => {
  for (let property of propertiesArr) {
    listDiv.innerHTML += createItem(
      property.name,
      property.description,
      property.price,
      property.imgUrl
    );
  }
};

export { initialPropertiesList, updatePropertiesList };
