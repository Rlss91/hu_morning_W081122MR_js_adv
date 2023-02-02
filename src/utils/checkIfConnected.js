const checkIfConnected = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  token = JSON.parse(token);
  return !!token; //convert to boolean
};

export default checkIfConnected;
