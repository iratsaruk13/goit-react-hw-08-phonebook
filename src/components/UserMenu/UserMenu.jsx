import { useAuth } from "hooks/useAuth";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "redux/Auth/operationsAuth";
import { LogOutBtn, UserMenuWrapper } from "./UserMenu.styled";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <UserMenuWrapper>
      <p> Welcome, {user.name}</p>
      <LogOutBtn type="button" onClick={handleLogOut}>
        Log out
      </LogOutBtn>
    </UserMenuWrapper>
  );
};

export default UserMenu;
