class User {
  name;
  email;
  password;
  isAdmin;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = false;
  }
}
export default User;
