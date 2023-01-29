let propertiesArr;
let listDiv;
let isAdmin;
let deleteProperty;
//this function will transfer data from homepage to this page
const initialPropertiesList = (
  propertiesArrFromHomePage,
  isAdminParam,
  deletePropertyFromHomePage
) => {
  listDiv = document.getElementById("home-page-properties-list");
  isAdmin = isAdminParam;
  deleteProperty = deletePropertyFromHomePage;
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

const createItem = (name, description, price, img, idx) => {
  const adminBtns = `
  <button type="button" class="btn btn-warning w-100">
    <i class="bi bi-pen-fill"></i> Edit
  </button>
  <button type="button" class="btn btn-danger w-100" id="propertyListDeleteBtn-${idx}">
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
  let idx = 0;
  let innerHTML = "";
  const handleDeleteBtnClick = (ev) => {
    let idxFromId = ev.target.id.split("-"); // split the id to array
    if (!ev.target.id) {
      /*
        if press on icon then there is no id
        then we need to take the id of the parent which is btn
      */
      idxFromId = ev.target.parentElement.id.split("-");
    }
    deleteProperty(idxFromId[1]);
  };
  //get all old btns
  let deleteBtnsBefore = document.querySelectorAll(
    "[id^='propertyListDeleteBtn-']"
  );
  //remove old events
  for (let deleteBtn of deleteBtnsBefore) {
    deleteBtn.removeEventListener("click", handleDeleteBtnClick);
  }
  //create new elements and remove old ones
  for (let property of propertiesArr) {
    innerHTML += createItem(
      property.name,
      property.description,
      property.price,
      property.imgUrl,
      idx
    );
    idx++;
  }
  listDiv.innerHTML = innerHTML;
  //add events to new btns
  let deleteBtns = document.querySelectorAll("[id^='propertyListDeleteBtn-']");
  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener("click", handleDeleteBtnClick);
  }
};

export { initialPropertiesList, updatePropertiesList };
