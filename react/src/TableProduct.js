import React , {useState} from 'react';
import PopUpProduct from './PopUpProduct'

function TableProduct (props) {
 
  const [propsPopUp,setPopUp] = useState({});

   let editPopUp = (text,button,action) =>  {
     console.log(action)
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
                        <h3 className="text muted mb-3">Productos</h3>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary rounded-circle ml-3 mb-3 btn-sm"
                          onClick= {() => editPopUp('Agregar producto','Agregar','/dashboard/addproduct')}
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
                        <th>Precio</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                        {props.dataTable.map((item) => {
                            return <tr> 
                              <td> {item.idProducto} </td>
                              <td> {item.nombre} </td>
                              <td> {item.precio} </td>
                              <td> {item.createdAt}</td>
                              <td>
                                <div className="row justify-content-center align-middle">        
                                  <button
                                    data-toggle="modal"
                                    data-target="#agregarProducto"
                                    onClick= {() => editPopUp('Modificar producto','Modificar',`/dashboard/editproduct/${item.idProducto}?_method=PUT`)}
                                  >
                                    <i className="fas fa-edit fa-1x text-success"></i>
                                  </button>
                                  <form
                                    method="post"
                                    action= {`/dashboard/deleteproduct/${item.idProducto}?_method=DELETE`} 
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
        <PopUpProduct props= {propsPopUp}/>     
      </section>
    );
}

export default TableProduct;
