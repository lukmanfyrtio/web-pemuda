import React from "react";
import "../css/content.css";
import Beranda from "./Beranda";
import { Route } from "react-router-dom";
import Pengumuman from "./Pengumuman";
import StrukturOrganisasi from "./StrukturOrganisasi";
import Profile from "./Profile";

export default function Content() {
  return (
    <div className="content">
      <Route exact path="/" component={Beranda} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/struktur-organisasi" component={StrukturOrganisasi} />
      <Route exact path="/pengumuman" component={Pengumuman} />
    </div>
  );
}
