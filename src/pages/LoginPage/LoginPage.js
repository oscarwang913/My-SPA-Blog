import React, { useState, useContext } from "react";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
import { useHistory } from "react-router-dom";

import {
  AccountPageContainer,
  SubmitBtn,
  AccountForm,
  AccountPageTitle,
  UserNameInput,
  PasswordInput,
} from "../../components/AccountForm";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    login(userName, password).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);
      // 當登入完後，要確認使用者身分
      getMe().then((res) => {
        if (res.ok !== 1) {
          // 有拿到token，但還是沒有登入成功
          setAuthToken(null);
          return setErrorMessage(res.toString());
        }
        setUser(res.data);
        history.push("/");
      });
    });
  };

  const handleUsernameInput = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <AccountPageContainer>
      <AccountPageTitle>Login</AccountPageTitle>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <AccountForm onSubmit={handleFormSubmit}>
        <UserNameInput
          type="text"
          placeholder="Enter your username"
          value={userName}
          onChange={handleUsernameInput}
        />
        <PasswordInput
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordInput}
        />
        <SubmitBtn>Sign In</SubmitBtn>
      </AccountForm>
    </AccountPageContainer>
  );
}
