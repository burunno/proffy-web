import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

interface IProps {
  title: string;
}

const PageHeader: React.FC<IProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="back" />
        </Link>
        <img src={logoImg} alt="logo" />
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
