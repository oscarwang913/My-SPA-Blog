import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { setAuthToken } from "../../utils";
import {
  HeaderContainer,
  NavListContainer,
  AccountContainer,
  Logo,
  Nav,
} from "./Header.style";

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const handleLogOut = () => {
    setAuthToken("");
    setUser(null);
    history.push("/");
  };
  return (
    <HeaderContainer>
      <NavListContainer>
        <Logo>Contenido</Logo>
        <Nav $active to="/">
          HOME
        </Nav>
        <Nav to="/about">About</Nav>
        {user && <Nav to="/createPost">Write</Nav>}
      </NavListContainer>
      <AccountContainer>
        {user ? (
          <Nav to="/" onClick={handleLogOut}>
            Sign Out
          </Nav>
        ) : (
          <Nav to="/login">Sign In</Nav>
        )}
        {!user && <Nav to="/register">Register</Nav>}
      </AccountContainer>
    </HeaderContainer>
  );
}
