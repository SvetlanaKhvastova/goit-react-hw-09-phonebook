import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { authOperations } from "../../redux/auth";
import avatar from "./linux-avatar.jpg";
import { Button } from "react-bootstrap";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.userMenu}>
      <img src={avatar} alt="" width="32"></img>
      <span className={s.span}>Welcome, {name}</span>
      <Button variant="primary" type="submit" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}
