import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from 'redux/Auth/operationsAuth';

const UserMenu = () => {
 const dispatch = useDispatch();
 const {user} = useAuth();
 
 const handleLogOut = () => dispatch(logOut())
  return (
    <div>UserMenu
      <p> Welcome, {user.name}</p>
      <button type='button' onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default UserMenu