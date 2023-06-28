import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  margin-right: auto;
  font-size: 20px;
  color: #1677FF;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #555;
  outline: none;
  min-width: 300px;
  &:focus {
  border-color: #1677FF;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const Error = styled.div`
  position: absolute;
  color: #cb1717;
  font-size: 14px;
`;

export const FormContactBtn = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: #300339;
  background-color: #e1bbe3;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 16px;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(51, 0, 66, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
