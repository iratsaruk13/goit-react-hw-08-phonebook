import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const FilterLabel = styled.label`
  display: block;
  margin-right: auto;
  font-size: 18px;
  color: #1677ff;
  @media screen and (min-width: 375px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FilterInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #555;
  outline: none;
  min-width: 250px;

  &:focus {
    border-bottom: 2px solid #1677ff;
    border-radius: 4px 4px 2px 2px;
  }
  &:hover {
    outline: 1px solid lightgrey;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  color: #b70505;
`;
