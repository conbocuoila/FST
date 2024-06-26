import React from "react";
import "./index.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://organicformulashop.com/cdn/shop/files/VECTORSTOCK-PROJECT-909-PINK-BACKGROUND_360x.png?v=1623904518"
          width={190}
          alt="logo"
        ></img>
        <h1>About us</h1>

        <p style={{ fontSize: 13 }}>
          Providing quality milk, mother and baby products from leading brands.
        </p>
        <div style={{ display: "flex", gap: "10px", fontSize: "14px" }}>
          <PhoneOutlined />
          <p>Phone: 0898892626</p>
        </div>
        <div style={{ display: "flex", fontSize: "14px", gap: "10px" }}>
          <MailOutlined />
          <p>Email: info@khangbaby.com</p>
        </div>
        <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
          <FacebookOutlined />
          <InstagramOutlined />
        </div>
      </div>

      <div className="footer-right">
        <h1>Support customer</h1>
        <p>Baby milk</p>
        <p>Milk bottle - Nipple</p>
        <p>Eat weaning</p>
        <p>Items for mom and family</p>
      </div>

      <div className="footer-right-right">
        <h1>Sign up for information</h1>
        <div className="box">
          <input type="text" placeholder="Enter email..."></input>
          <span>Register</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
