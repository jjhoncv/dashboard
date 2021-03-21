import * as React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import "./style.scss";

export const Login: React.FC<any> = () => {
  const { login, isFetching } = useAuth();

  const fetchLogin = async (id, username) => {
    login(id, username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = (document.getElementById("username") as any).value;
    fetchLogin(1, username);
  };

  return (
    <div className="content">
      {isFetching ? (
        <>Cargando...</>
      ) : (
        <>
          <div className="login-head">
            <h2>Login</h2>
          </div>
          <div className="login">
            <div className="login-main">
              <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-item">
                  <label htmlFor="">Username</label>
                  <input type="text" name="username" id="username" />
                </div>
                <div className="form-item">
                  <label htmlFor="">Password</label>
                  <input type="password" name="password" id="password" />
                </div>
                <div className="login-foot">
                  <input type="submit" value="Login" />
                  <p>
                    Si aún no eres usuario registrate{" "}
                    <NavLink exact to="/register">
                      aquí
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
