import styled from "styled-components";
import theme from "../styles/theme";

export const AccountPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 18px);
  max-width: 550px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 25px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  background-color: ${theme.color.background};
`;

export const AccountForm = styled.form`
  width: 100%;
  text-align: center;
`;

export const AccountPageTitle = styled.div`
  font-size: 32px;
  font-weight: ${theme.fontWeight.md};
`;

export const InputWrapper = styled.div`
  width: 100%;
`;
export const UserNameInput = styled.input`
  padding: ${theme.space.md};
  font-size: ${theme.font.md};
  background-color: ${theme.color.background};
  line-height: 20px;
  width: 100%;
  margin-top: 16px;
  border-width: 0px 0px 2px;
`;
export const NickNameInput = styled(UserNameInput)``;
export const PasswordInput = styled(UserNameInput)``;

export const SubmitBtn = styled.button`
  background-color: ${theme.color.primary};
  color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  font-weight: ${theme.fontWeight.md};
  font-size: 16px;
  width: 50%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ErrorMsg = styled.p`
  color: #ff0000;
`;
