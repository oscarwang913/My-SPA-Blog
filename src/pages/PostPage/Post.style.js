import styled from "styled-components";
import theme from "../../styles/theme";

export const PostPageContainer = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: ${theme.space.md};
`;

export const PostTitle = styled.h1`
  font-size: ${theme.font.xl};
  margin-bottom: ${theme.space.md};
  font-weight: ${theme.fontWeight.md};
  color: ${theme.color.secondary};
`;

export const PostTime = styled.h4``;

export const PostContent = styled.p`
  line-height: 1.5;
  white-space: pre-line;
  word-break: break-all;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.delete ? "#393e46" : "#f8b500")};
  color: ${(props) => (props.delete ? "#ffffff" : "#393e46")};
  padding: 12px 18px;
  margin-right: ${theme.space.md};
  cursor: pointer;
`;
