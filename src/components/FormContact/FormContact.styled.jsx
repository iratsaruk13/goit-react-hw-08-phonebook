import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
  
`

export const FormLabel = styled.label`
  margin-right: auto;
  padding: 5px;
  color: #1677ff;

  @media screen and (min-width: 375px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #555;
  outline: none;
  min-width: 250px;
  &:focus {
    border-color: #1677ff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const Error = styled.div`
  color: red;
  @media screen and (min-width: 375px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FormButton = styled.button`
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #c1eacd;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }
  &:hover:before {
    width: 100%;
    background: #97d1a7;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const FormButtonSpan = styled.span`
  position: relative;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #1e6610;
`;

export const FormButtonSvg = styled.svg`
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #126a01;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(0);
  }
`;
export const InputWrapper = styled.div`
  display: flex;
`;
