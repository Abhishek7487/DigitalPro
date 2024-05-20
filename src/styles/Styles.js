import styled from "styled-components";

export const StyledAppLayout = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & h3 {
    font-size: 2.4rem;
  }
`;
