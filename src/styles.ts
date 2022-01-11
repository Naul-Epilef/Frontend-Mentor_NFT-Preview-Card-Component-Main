import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background-color: var(--blue-dark-main);
`;

const Card = styled.div`
  width: 300px;
  height: 550px;

  border-radius: 20px;

  background-color: var(--blue-dark-card);

  box-shadow: 1px 1px 50px black;

  padding: 24px;

  & span {
    display: flex;
    align-items: center;
  }

  & span svg {
    margin-right: 5px;
  }
`;

const ContainerIMG = styled.div`
  position: relative;
  cursor: pointer;
  & img {
    width: 100%;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s;
    height: 100%;
    width: 100%;
  }

  & div {
    border-radius: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 99%;
    width: 100%;
    opacity: 0;
    transition: 0.2s ease;
    background-color: var(--cyan05);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div svg {
    opacity: 1;
  }

  &:hover div {
    opacity: 1;
  }
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 150px;
  padding: 20px 0;
  border-bottom: 1px solid var(--blue-dark-line);

  & h2 {
    cursor: pointer;
    color: var(--white);
    transition: all 0.2s;
  }

  & h2:hover {
    color: var(--cyan);
  }

  & p {
    font-weight: 400;
    font-size: 18px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
`;

const EthereumSpan = styled.span`
  color: var(--cyan);
  font-weight: 600;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;

  & img {
    width: 40px;
    border-radius: 50%;
    border: 1px solid var(--white);
    margin-right: 20px;
  }

  & span {
    font-size: 15px;
  }

  & span:last-child {
    color: var(--white);
    cursor: pointer;
  }

  & span:last-child:hover {
    color: var(--cyan);
  }
`;

export { Main, Card, CardBody, ContainerIMG, EthereumSpan, CardBottom };
