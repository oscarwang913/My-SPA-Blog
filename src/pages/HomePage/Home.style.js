import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/mediaQueries";
import theme from "../../styles/theme";

export const HomePageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: ${theme.space.md};

  @media ${device.md} {
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 80vw;
    height: calc(100vh - 98px);
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media ${device.md} {
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
`;

export const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 200px;
  border: 1px solid ${theme.color.primary};
  margin-bottom: ${theme.space.md};
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  padding: ${theme.space.sm};

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }

  @media ${device.md} {
    min-width: 18vw;
    margin-right: ${theme.space.lg};
  }
`;
export const PostTitle = styled.p`
  font-weight: ${theme.fontWeight.md};
  color: ${theme.color.secondary};
  font-size: ${theme.font.md};

  @media ${device.md} {
    font-size: ${theme.font.lg};
  }
`;
export const PostDate = styled.div`
  font-weight: ${theme.fontWeight.sm};
  color: ${theme.color.tertiary};
`;
