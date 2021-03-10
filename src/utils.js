const TOKEN_NAME = "token";

export const timeConverter = (createdTime) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${new Date(createdTime).getDate().toLocaleString()}, ${
    monthNames[new Date(createdTime).getMonth().toLocaleString()]
  }`;
};

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const validation = (values) => {
  let errors = {};

  // checking username
  if (!values.userName.trim()) {
    errors.userName = "User Name is required";
  } else {
    errors.userName = "";
  }

  // checking nickname
  if (!values.nickName.trim()) {
    errors.nickName = "Nick Name is required";
  } else {
    errors.nickName = "";
  }

  // checking password
  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else {
    errors.password = "";
  }

  return errors;
};
