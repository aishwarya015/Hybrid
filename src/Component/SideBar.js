
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

function SideBar() {
  return (
      <div>
      
    <div className="sidenav">
    <Link className="nav-link " to={"/Home"}>Home</Link>
    <Link className="nav-link" to={"/About"}>About</Link>
    <Link className="nav-link" to={"/Contact"}>Contact</Link>
    </div>
    </div>
  );
}
export default SideBar;
