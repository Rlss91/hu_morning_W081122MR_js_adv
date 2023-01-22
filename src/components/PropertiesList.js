let propertiesArr;
let listDiv;
//this function will transfer data from homepage to this page
const initialPropertiesList = (propertiesArrFromHomePage) => {
  propertiesArr = propertiesArrFromHomePage;
  listDiv = document.getElementById("home-page-properties-list");
  createList();
};

const createItem = (name, description, price, img) => {
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
            Success
        </button>
        <button type="button" class="btn btn-warning w-100">
            Warning
        </button>
        <button type="button" class="btn btn-danger w-100">
            Danger
        </button>
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

export default initialPropertiesList;
