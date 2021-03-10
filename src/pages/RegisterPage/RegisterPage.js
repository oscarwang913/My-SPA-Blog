import React, { useState, useContext } from "react";
import { validation } from "../../utils";
import { getMe, registerAccount } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
import { useHistory } from "react-router-dom";
import {
  AccountPageContainer,
  SubmitBtn,
  AccountForm,
  AccountPageTitle,
  UserNameInput,
  InputWrapper,
  NickNameInput,
  PasswordInput,
  ErrorMsg,
} from "../../components/AccountForm";

export default function RegisterPage() {
  const [values, setValues] = useState({
    userName: "",
    nickName: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [apiResError, setApiResError] = useState();
  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.userName || !values.nickName || !values.password) {
      setErrors(validation(values));
      return;
    }
    registerAccount(values.userName, values.nickName, values.password).then(
      (res) => {
        if (res.ok !== 1) {
          return setApiResError(res.message);
        }
        setApiResError(res.message);
        setAuthToken(res.token);

        getMe().then((res) => {
          if (res.ok !== 1) {
            setAuthToken(null);
            return setApiResError(res.toString());
          }
          setUser(res.data);
          history.push("/");
        });
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <AccountPageContainer>
      <AccountPageTitle>Register</AccountPageTitle>
      {apiResError && <ErrorMsg>{apiResError}</ErrorMsg>}
      <AccountForm onSubmit={handleSubmit}>
        <InputWrapper>
          <UserNameInput
            name="userName"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={values.userName}
            onFocus={handleFocus}
          />
        </InputWrapper>
        {errors.userName && <ErrorMsg>{errors.userName}</ErrorMsg>}
        <InputWrapper>
          <NickNameInput
            name="nickName"
            type="text"
            placeholder="Nickname"
            onChange={handleChange}
            value={values.nickName}
            onFocus={handleFocus}
          />
        </InputWrapper>
        {errors.nickName && <ErrorMsg>{errors.nickName}</ErrorMsg>}
        <InputWrapper>
          <PasswordInput
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={values.password}
            onFocus={handleFocus}
          />
        </InputWrapper>
        {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
        <SubmitBtn>Create An Account</SubmitBtn>
      </AccountForm>
    </AccountPageContainer>
  );
}
