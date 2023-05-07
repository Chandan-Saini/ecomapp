import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul style={{display: 'flex'}} className="">
        <li>
          <NavLink to="/" className="is-active" end>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/user" activeClassName="active">
            User
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/login" className="is-active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
