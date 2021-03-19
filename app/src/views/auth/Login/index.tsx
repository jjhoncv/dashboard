import * as React from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { session } from "../../../utils";
import "./style.scss";

export const Login: React.FC<any> = () => {
  const handleSubmit = (e) => {
    const domUsername = document.getElementById("username") as HTMLInputElement;
    const user = { name: domUsername.value, id: 10 };
    session.setUser(user);
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <>
      <Header />
      <div className="content">
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
                  Si aún no eres usuario registrate <a href="/register">aquí</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
