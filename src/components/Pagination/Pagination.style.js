import styled from "styled-components";
import theme from "../../styles/theme";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const PageButton = styled.button`
  font-size: ${theme.font.sm};
  padding: ${theme.space.md};
  border: ${theme.line.sm} solid ${theme.color.tertiary};
  cursor: pointer;
  margin-right: ${theme.space.md};
`;
