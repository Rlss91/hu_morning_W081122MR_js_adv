class Property {
  id;
  name;
  price;
  description;
  imgUrl;
  constructor(id, name, price, description, imgUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}
export default Property;
