import styled from "styled-components";

export const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
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

// Layout

export const StyledHeader = styled.div`
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.6rem;
  padding: 1.6rem 3.6rem;
  border-bottom: solid 1px var(--color-grey-300);

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

export const StyledMain = styled.main`
  min-height: 72.5vb;
`;

export const StyledFooter = styled.footer`
  display: flex;
  background-color: var(--color-grey-300);
  color: var(--color-grey-600);
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1.6rem 0;
  position: relative;
  /* bottom: 0;
  left: 0;
  right: 0; */

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .footer-icons {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
  li {
    list-style: none;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2.4rem;
  background-color: var(--color-grey-100);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const StyledProductCard = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
  background-color: var(--color-grey-100);
  border-radius: 1rem;

  .productImage {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-grey-200);
    padding: 1.6rem;
    overflow: hidden;
  }

  img {
    height: 20rem;
    object-fit: contain;
  }
  div {
    padding: 1rem;
  }
  button {
    align-items: center;
    width: 100%;
    background-color: var(--color-grey-900);
    color: var(--color-grey-100);
    padding: 0.6rem 0;
    font-size: 1.4rem;
  }
`;

// Store

export const StyledStoreLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

export const Main = styled.main`
  overflow: scroll;
  grid-column: 2;
  grid-row: 2;
`;

export const StyledProductFilter = styled.div`
  grid-column: 1 /-1;
  border-bottom: 1px solid var(--color-grey-300);
  min-height: 8rem;
`;

export const StyledSortingSidebar = styled.div`
  border-right: 1px solid var(--color-grey-300);
`;
