import styled from "styled-components";

export const ContactsTitle = styled.h2`
  color: #1677ff;
  padding: 20px;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContactsName = styled.p`
  color: #1677ff;
  font-size: 18px;
`;

export const ContactsButton = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #e62222;
  transition: 200ms;
  &:hover {
    background: #ff3636;
  }
  &:focus {
    outline: none;
  }
  :active {
    transform: scale(0.8);
  }
`;

export const ContactsButtonText = styled.span`
  color: white;
  font-weight: bold;
`;
