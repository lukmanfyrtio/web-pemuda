import React from "react";
import "../css/header.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <div className="header_menu_icon"></div>
        <img className="header__logo" src={logo} alt="logo" />
      </div>
      <div className="header_content">
        <div className="header_tittle">
          <div className="tittle_1">SELAMAT DATANG DI SITUS WEB RESMI</div>
          <div className="tittle_1">PEMUDA KARANG TINGGAL</div>
        </div>
        <div className="header_menu">
          <div className="menu_option">
            <Link className="header_links" to="/">
              Beranda
            </Link>
          </div>
          <div className="menu_option">
            <Link className="header_links" to="/profile">
              Profil
            </Link>
          </div>
          <div className="menu_option">
            <Link className="header_links" to="/struktur-organisasi">
              Struktur Organisasi
            </Link>
          </div>
          <div className="menu_option">
            <Link className="header_links" to="/pengumuman">
              Pengumuman
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
