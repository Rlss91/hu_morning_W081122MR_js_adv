import validate from "./validate.js";
const validateEmail = (value) => {
  const reg = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    "ig"
  );
  return validate(reg, value, 5, 255).map((err) => `email is ${err}`);
};

export default validateEmail;
/*
    let errorErr = validate(reg, value, 5, 10);
    [//min
        " to short"
    ]
    [//max
        " to long"
    ]
    [//regex
        " invalid"
    ]
    [// max and regex
        " to long",
        " invalid"
    ]
    let newErrorArr = errorErr.map((err) => `email is ${err}`);
    return newErrorArr;
  */
/*
    [//min
        "email is to short"
    ]
    [//max
        "email is to long"
    ]
    [//regex
        "email is invalid"
    ]
    [// max and regex
        "email is to long",
        "email is invalid"
    ]
*/
