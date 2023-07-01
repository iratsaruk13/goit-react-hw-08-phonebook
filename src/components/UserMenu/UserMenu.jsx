import { useAuth } from "hooks/useAuth";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "redux/Auth/operationsAuth";
import { LogOutBtn, UserMenuText, UserMenuWrapper } from "./UserMenu.styled";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <UserMenuWrapper>
      <UserMenuText> Welcome, {user.name}</UserMenuText>
      <LogOutBtn type="button" onClick={handleLogOut}>
        Log Out
      </LogOutBtn>
    </UserMenuWrapper>
  );
};

export default UserMenu;
