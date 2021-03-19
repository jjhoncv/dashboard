import * as React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import "./style.scss";

export const Dashboard = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};
