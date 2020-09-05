import React from 'react';
import IconNav from './IconNav'
import Navbar from './Navbar'

function Nav(props) {
    return (  
        <nav className="navbar navbar-expand-md navbar-light">
            <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="myNavbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                        <a
                            href="#"
                            className="navbar-brand text-white d-block mx-auto text-center py-3"
                        >
                            {props.title}</a
                        >

                        <div className="container-fluid">
                            <div className="row">
                            <div className="account-details justify-content-start">
                                <ul>
                                <li>
                                    <a href="#" className="text-white"> Usuario</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> usuario@gmail.com </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>

                        <ul className="navbar-nav flex-column mb-4">
                            <Navbar href = '/dashboard' class = 'current' icon = 'fa-user' text = 'Usuarios'/>
                            <Navbar href = '/dashboard/products' class = 'sidebar-link' icon = 'fa-table' text = 'Productos'/>
                            <Navbar href = '#' class = 'sidebar-link' icon = 'fa-shopping-cart' text = 'Publicaciones'/>
                            <Navbar href = '#' class = 'sidebar-link' icon = 'fa-comments' text = 'Comentarios'/>
                        </ul>
                        </div>
            
                        <div
                        className="col-xl-10 col-lg-9 col-md-8 ml-auto fixed-top py-2 top-navbar"
                        >
                            <div className="row align-items-center justify-space-evenly">
                                <div className="col-md-4 col-sm-2">
                                    <h4 className="text-light text-uppercase mb-0">Dashboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
