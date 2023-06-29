import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f3f4;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const MainTitle = styled.h1`
  color: #212121;
  padding: 20px;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
