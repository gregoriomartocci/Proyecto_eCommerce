import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
  return (           
    <ul className="navbar-nav flex-column">
    <li className="nav-item">
        <Link
          to={props.href}
          className={`nav-link text-white p-3 mb-2 ${props.class}`}
          ><i className={`fa ${props.icon} text-light fa-lg mr-3`}></i>{props.text}
        </Link>
    </li>     
    </ul>

  );
}

export default Navbar;
