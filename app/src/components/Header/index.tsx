import * as React from "react";
import "./style.scss";
// @ts-ignore
import logo from "./../../assets/imgs/logo.png";
import { session } from "../../utils";
export const Header = () => {
  const [user, setUser] = React.useState(session.getUser());
  const handleLogout = (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem("user");
    window.location.href = "/login";
  };
  return (
    <header>
      <div className="content">
        <div className="header-left">
          <img src={logo} height="40px" />
          <h1>Dashboard</h1>
        </div>
        {user?.id && (
          <div className="header-center">
            <ul className="header-module">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>Products</span>
                <ul>
                  <li>
                    <a title="add product" href="/products/add">add product</a>
                  </li>
                  <li>
                    <a title="products" href="/products">products</a>
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
                  <a>Hi! {user.name}</a>
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
                  <a title="Ir a login" href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a title="Ir a registro" href="/register">
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
