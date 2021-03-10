import styled from "styled-components";
import theme from "../styles/theme";

export const PostFormContainer = styled.div`
  width: 100%;
  max-width: 850px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 25px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  background-color: ${theme.color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PostForm = styled.form`
  width: 100%;
  text-align: center;
`;
export const TitleInput = styled.input`
  padding: 12px 10px;
  font-size: 32px;
  line-height: 20px;
  width: 100%;
  margin-top: 16px;
  border: 0;
  background-color: ${theme.color.background};
`;
export const ContentInput = styled.textarea`
  padding: 12px 10px;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  border: 0;
  background-color: ${theme.color.background};
`;
