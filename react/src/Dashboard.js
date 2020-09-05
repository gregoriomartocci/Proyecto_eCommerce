import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Nav from './Nav'
import Card from './Card'
import Logout from './Logout'
import TableDashboard from './TableDashboard'


function Dashboard() {
  return (
    <body>
      <Nav title = 'Dashboard' />
      <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                  <div className="row pt-md-5 mt-md-3 mb-5">
                      <Card text = 'Cantidad de Usuarios' icon = 'fa-users' color = 'text-secondary' /> 
                  </div>
                </div>
              </div>
            </div>
      </section>
      <TableDashboard />
      <Logout />
    </body>
  );
}

export default Dashboard;
