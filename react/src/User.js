import React , {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Nav from './Nav'
import Card from './Card'
import TableUser from './TableUser'


function User() {

  const [dataTable,setData] = useState([]);
  const [qUser,setQUser] = useState(null);

  useEffect(() => {
      const getAllUser = async () => {    
      try {
          const response = await fetch('/dashboard/getalluser');
          const dataAPI = await response.json()
          setData(dataAPI)
          setQUser(dataAPI.length)
      } catch (error) {
          console.log(error)
      }
      }
      getAllUser()
  },[])

  return (
    <body>
      <Nav/>
      <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                  <div className="row pt-md-5 mt-md-3 mb-5">
                      <Card text = 'Q Usuarios' icon = 'fa-users' color = 'text-secondary' value = {qUser}/> 
                  </div>
                </div>
              </div>
            </div>
      </section>
      <TableUser dataTable = {dataTable}/>
    </body>
  );
}

export default User;
