import React from "react";
import globePhoto from "../Images/Fill 213.png";
export default function Nav() {
  return (
    <div className="Navbar">
        <img src={globePhoto} alt="" />
        <p>My <span>Travel</span> Journal</p>
    </div>
  );
}
