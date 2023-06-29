import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { Link } from "react-router-dom";
import { AppNavLink, Authorization, Header, NavAppBar } from "./AppBar.styled";
import logo from "../../images/logo.png";

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Link to="/">
        <img src={logo} alt="logo" width="55" />
      </Link>
      <NavAppBar>
        <AppNavLink to="/" end>
          Home
        </AppNavLink>
        {isLoggedIn && <AppNavLink to="/contacts">Contacts</AppNavLink>}

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Authorization>
            <AppNavLink to="/register">Sign up</AppNavLink>
            <AppNavLink to="/login">Log in</AppNavLink>
          </Authorization>
        )}
      </NavAppBar>
    </Header>
  );
};

export default AppBar;
