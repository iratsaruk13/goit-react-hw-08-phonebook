import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F1F3F4;
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
  font-size: 40px;
  color: #5c057e;
  margin-bottom: 20px;
`;

export const ContactsTitle = styled.h2`
  font-size: 36px;
  color: #5c057e;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 18px;
  color: #5c057e;
`;
