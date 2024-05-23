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

  > h3 {
    font-size: 2.6rem;
  }
`;

// Header

export const StyledHeader = styled.div`
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.6rem;
  padding: 1.6rem 3.6rem;
  border-bottom: solid 1px #d3d3d3;

  a {
    font-weight: 500;
    font-size: 2rem;
  }

  ul {
    flex: 1;
    display: flex;
    list-style: none;
    gap: 2.4rem;

    > a {
      font-size: 1.6rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    > a {
      font-size: 2.4rem;
    }
  }
`;
