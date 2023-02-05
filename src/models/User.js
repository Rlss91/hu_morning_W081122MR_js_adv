class User {
  id;
  name;
  email;
  password;
  isAdmin;
  constructor(id, name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = false;
    this.id = id;
  }
}
export default User;
