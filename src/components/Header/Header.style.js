import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const HeaderContainer = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  padding-left: ${theme.space.md};
  align-items: center;
`;

export const NavListContainer = styled.div``;
export const AccountContainer = styled.div``;

export const Logo = styled.h1`
  font-size: ${theme.font.xl};
  margin-bottom: ${theme.space.sm};
  font-weight: ${theme.fontWeight.md};
  color: ${theme.color.secondary};
`;
export const Nav = styled(Link)`
  color: ${theme.color.secondary};
  margin-right: ${theme.space.sm};
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${theme.color.primary};
  }
`;
