import validate from "./validate.js";
const validatePassword = (value) => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,255}$",
    "g"
  );
  return validate(reg, value, 5, 255).map((err) => `password is ${err}`);
};

export default validatePassword;
