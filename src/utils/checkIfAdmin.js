const checkIfAdmin = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  token = JSON.parse(token);
  return token.isAdmin;
};

export default checkIfAdmin;
