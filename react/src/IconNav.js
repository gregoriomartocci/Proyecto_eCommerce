import React from 'react';

function IconNav(props) {
  return (           
    <li className= {`nav-item ${props.classLi}`}>
        <a href={props.href} 
            className="nav-link icon-bullet"    
            data-toggle="modal"
            data-target="#sign-out"> 
        <i className={`fa ${props.icon} fa-lg`}></i>
        </a>
    </li>
  );
}

export default IconNav;
