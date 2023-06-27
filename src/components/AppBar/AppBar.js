import UserMenu from 'components/UserMenu/UserMenu'
import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AppBar = () => {
    const {isLoggedIn} = useAuth();

  return (
    <header>
            <nav>
                <NavLink to="/" end>
                Home page
                </NavLink>
                {isLoggedIn && (
                    <NavLink to="/contacts">
                    Contacts
                </NavLink>
                )}
            </nav>
            <div>
                {isLoggedIn ?   <UserMenu /> : (
                    <div>
                        <NavLink to="/register">
                        Register
                    </NavLink>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                    </div>
                )}
                
            </div>
        </header>
  )
}

export default AppBar