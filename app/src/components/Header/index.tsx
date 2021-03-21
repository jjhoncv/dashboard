import * as React from "react";
import "./style.scss";
// @ts-ignore
import Logo from "./../../assets/imgs/logo.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <header>
      <div className="content">
        <div className="header-left">
          <img src={Logo} height="40px" />
          <h1>Dashboard</h1>
        </div>
        {user?.id && (
          <div className="header-center">
            <ul className="header-module">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <span>Products</span>
                <ul>
                  <li>
                    <NavLink exact to="/products/add">
                      add product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/products">
                      products
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        <nav className="header-right">
          <ul>
            {user?.id ? (
              <>
                <li>
                  <a>Hi! {user.username}</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLogout(e)}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink exact to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/register">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
