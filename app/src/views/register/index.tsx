import * as React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Register: React.FC<any> = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="content">
      <div className="login-head">
        <h2>Register</h2>
      </div>
      <div className="login">
        <div className="login-main">
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-item">
              <label htmlFor="">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-item">
              <label htmlFor="">Surname</label>
              <input type="text" name="surname" id="surname" />
            </div>
            <div className="form-item">
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="form-item">
              <label htmlFor="">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="login-foot">
              <input type="submit" value="Register" />
              <p>
                Si ya estas registrado ingresa a{" "}
                <NavLink exact to="/login">
                  aquí
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
