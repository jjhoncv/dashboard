import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as authActions from "../../features/auth/actions";
import "./style.scss";

export const Login: React.FC<any> = () => {
  const isFetching = useSelector((state: any) => state.auth.isFetching);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = (document.getElementById("username") as any).value;
    const password = (document.getElementById("password") as any).value;
    dispatch(authActions.login(username, password));
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
