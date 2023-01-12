const validate = (regex, value, min, max) => {
  let msgsArr = [];
  if (value.length < min) {
    msgsArr = [...msgsArr, " too short"]; // msgsArr.push(" too short")
  }
  if (value.length > max) {
    msgsArr = [...msgsArr, " too long"]; // msgsArr.push(" too long")
  }
  if (!regex.test(value)) {
    msgsArr = [...msgsArr, " invalid"]; // msgsArr.push(" invalid")
  }
  return msgsArr;
};
export default validate;

/*
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
*/

// validate(
//   new RegExp(
//     "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$",
//     "g"
//   ),
//   "Aa123456!",
//   0,
//   20
// );
