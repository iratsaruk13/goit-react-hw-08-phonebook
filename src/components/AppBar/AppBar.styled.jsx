import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
export const MainTitle = styled.h1`
  color: #212121;
  padding: 20px;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const NavAppBar = styled.nav`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 100px;
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    gap: 150px;
  }
`;

export const AppNavLink = styled(NavLink)`
  padding: 12px;
  margin-left: 10px;
  border: unset;
  border-radius: 15px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 500;
  font-size: 12px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }
  &:hover {
    color: #e8e8e8;
  }
  &:hover::before {
    width: 100%;
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

export const Authorization = styled.div`
  display: flex;
`;
