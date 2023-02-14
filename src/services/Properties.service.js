let propertiesArr, originalPropertiesArr;

window.addEventListener("load", () => {
  propertiesArr = localStorage.getItem("props");
  if (!propertiesArr) {
    return;
  }
  propertiesArr = JSON.parse(propertiesArr);
  originalPropertiesArr = [...propertiesArr];
});

const deleteProperty = (id) => {
  id = +id; //convert string to number
  originalPropertiesArr = originalPropertiesArr.filter(
    (item) => item.id !== id
  );
  saveToLocalStorage(originalPropertiesArr);
  propertiesArr = propertiesArr.filter((item) => item.id !== id); //delete property by index
};

const saveToLocalStorage = (arrToSave) => {
  localStorage.setItem("props", JSON.stringify(arrToSave));
};

export { deleteProperty, propertiesArr, originalPropertiesArr };
