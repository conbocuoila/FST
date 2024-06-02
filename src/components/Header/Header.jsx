import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to={"/"}>
          <img
            src="https://www.beeamazed.com.sg/wp-content/uploads/2021/03/HM_LOGO-1024x559.png"
            width={200}
            alt="logo"
          ></img>
        </Link>
      </div>
      <nav className="header_nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/infor"}>Information</Link>
        </li>
        <div className="createaccount">
          <li>
            <Link to={"/createaccount"}>Create Account</Link>
          </li>
        </div>
        <li>
          <Link to={"/signin"}>Sign in</Link>
        </li>

        <li style={{ fontSize: "16px", display: "flex", gap: "5px" }}>
          <Badge count={1} size="small">
            {" "}
            <ShoppingCartOutlined
              style={{ cursor: "pointer", fontSize: "20px" }}
            />
          </Badge>
        </li>
      </nav>
    </div>
  );
};

export default Header;