import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom'


function Navbar(props) {

  const estilo = useRouteMatch({path: props.href,exact:true})?'current':'sidebar-link';
  
  return (           
    <ul className="navbar-nav flex-column">
    <li className="nav-item"
    >
        <Link
          to={props.href}
					className={`nav-link text-white mb-2 ${estilo}`}
          ><i className={`fa ${props.icon} text-light fa-lg mr-3`}></i>{props.text}
        </Link>
    </li>     
    </ul>

  );
}

export default Navbar;
