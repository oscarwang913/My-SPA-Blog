import styled from "styled-components";
import theme from "../../styles/theme";

const Root = styled.div`
  font-size: ${theme.font.md};
  min-height: 100vh;
  width: 100%;
  background-color: ${theme.color.background};
  border: ${theme.line.lg} solid ${theme.color.primary};
`;

export default Root;
