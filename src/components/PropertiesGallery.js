let propertiesArr;
let galleryDiv;
//this function will transfer data from homepage to this page
const initialPropertiesGallery = (propertiesArrFromHomePage) => {
  galleryDiv = document.getElementById("home-page-properties-gallery");
  updatePropertiesGallery(propertiesArrFromHomePage);
};

const updatePropertiesGallery = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new gallery.
    if the gallery already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createGallery();
};

const createCard = (name, description, price, img) => {
  return `
  <div class="col">
    <div class="card">
      <img
        src="${img}"
        class="card-img-top"
        alt="${name}"
      />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
          ${description}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${price}</li>
      </ul>
      <div class="card-body">
        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <button type="button" class="btn btn-danger">Danger</button>
      </div>
    </div>
  </div>
  `;
};

const createGallery = () => {
  let innerStr = "";
  for (let property of propertiesArr) {
    innerStr += createCard(
      property.name,
      property.description,
      property.price,
      property.imgUrl
    );
  }
  galleryDiv.innerHTML = innerStr;
};

export { initialPropertiesGallery, updatePropertiesGallery };
