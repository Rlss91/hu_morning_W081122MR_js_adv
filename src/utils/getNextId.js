const getNextId = () => {
  let nextId = localStorage.getItem("nextid");
  if (!nextId) {
    nextId = 1;
    return nextId;
  }
  nextId = +nextId;
  if (isNaN(nextId)) {
    nextId = 1;
  }
  return nextId;
};

export default getNextId;
