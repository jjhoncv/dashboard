import * as React from "react";
import "./style.scss";

export const Dashboard = () => {
  return (
    <div className="content">
      <div className="login-head">
        <h2>Welcome Dashboard</h2>
      </div>
      <br />
      <br />
      <br />
      <div className="dashboard-modules">
        Modules: <a href="/products">Products</a>
      </div>
    </div>
  );
};
