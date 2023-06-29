import styled from "styled-components";

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LogOutBtn = styled.button`
  background-color: #ffffff;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.5rem;
  color: #111827;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  &:hover {
    background-color: #f9fafb;
  }
  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.1);
    outline-offset: 2px;
  }
  :focus-visible {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  @media screen and (min-width: 375px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 700;
    padding: 15px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
