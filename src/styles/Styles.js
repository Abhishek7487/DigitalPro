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

// Store

export const StyledStoreLayout = styled.div`
  display: grid;
  grid-template-columns: 32rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

export const Main = styled.main`
  overflow: scroll;
  grid-column: 2;
  grid-row: 2;

  @media (max-width: 776px) {
    grid-column: 1/-1;
  }
`;

export const StyledProductFilter = styled.div`
  grid-column: 1 /-1;
  border-bottom: 1px solid var(--color-grey-300);
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    padding: 1.4rem 5.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: 2px solid transparent;

    img {
      height: 5.2rem;
    }
  }

  div:hover {
    border-bottom: 2px solid var(--color-red);
  }
`;

export const StyledSortSidebar = styled.div`
  border-right: 1px solid var(--color-grey-300);
  display: flex;
  flex-direction: column;

  /* 
  grid-column: 1;
  grid-row: 2; */

  @media (max-width: 776px) {
    display: none;
  }
`;
export const StyledSort = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem 5.8rem;

  input {
    cursor: pointer;
    margin-right: 1rem;
  }
`;
export const StyledBrands = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem 5.8rem;
  input {
    cursor: pointer;
    margin-right: 1rem;
  }
`;
export const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`;
export const StyledPriceRange = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  background-color: var(--color-grey-50);
  @media (max-width: 1490px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledProductCard = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 40rem;
  background-color: #fff;
  border: 1px solid var(--color-grey-300);
  border-radius: 1rem;
  overflow: hidden;

  /* border-radius: 1rem; */

  .productImage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    height: 75%;
    overflow: hidden;

    img {
      width: 100%;
      height: 80%;
      object-fit: contain;
      object-position: center;
    }
  }

  .productInfo {
    background-color: var(--color-grey-50);
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    main {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 1rem;
      flex-direction: column;

      p {
        font-size: 1.8rem;
        font-weight: 600;
      }
    }
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
