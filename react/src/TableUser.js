import React , {useState} from 'react';
import PopUpUser from './PopUpUser'

function TableUser(props) {

    const [propsPopUp,setPopUp] = useState({});

   let editPopUp = (text,button,action) =>  {
     let propsPopUp = {text:text,button:button,action:action}
     setPopUp(propsPopUp)
  }

    return (           
        <section>
            <div className="container-fluid">
            <div className="row mb-5">
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row">
                    <div className="col-12">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                        <div>
                            <h3 className="text muted mb-3">Usuarios</h3>
                        </div>
                        <div>
                            <button
                            type="button"
                            className="btn btn-primary rounded-circle ml-3 mb-3 btn-sm"
                            onClick= {() => editPopUp('Agregar Usuario','Agregar','/dashboard/addUser')}
                            data-toggle="modal"
                            data-target="#agregarProducto"
                            >
                            <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    <table className="table bg-light text-center">
                        <thead>
                        <tr className="text-muted">
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.dataTable.map((item) => {
                            return <tr> 
                            <td> {item.idUsuario} </td>
                            <td> {item.nombre} </td>
                            <td> {item.apellido} </td>
                            <td> {item.email} </td>
                            <td>
                                <div className="row justify-content-center align-middle">        
                                  <button
                                    data-toggle="modal"
                                    data-target="#agregarProducto"
                                    onClick= {() => editPopUp('Modificar usuario','Modificar',`/dashboard/edituser/${item.idUsuario}?_method=PUT`)}
                                  >
                                    <i className="fas fa-edit fa-1x text-success"></i>
                                  </button>
                                  <form
                                    method="post"
                                    action= {`/dashboard/deleteuser/${item.idUsuario}?_method=DELETE`} 
                                  >
                                    <button name="foo" value="send">
                                      <i className="fas fa-trash-alt fa-1x text-danger"></i>
                                    </button>
                                  </form>
                                </div>
                              </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        <PopUpUser props= {propsPopUp}/>
        </section>
    );
}

export default TableUser;
