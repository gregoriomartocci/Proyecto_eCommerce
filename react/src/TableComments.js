import React , {useState} from 'react';
import PopUpComment from './PopUpComment'

function TableComments (props) {
 
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
                        <h3 className="text muted mb-3">Comentarios</h3>
                      </div>
                    </div>
                  </div>
                  <table className="table bg-light text-center">
                    <thead>
                      <tr className="text-muted">
                        <th>#</th>
                        <th>Comentario</th>
                        <th>Últ. modifcación</th>
                      </tr>
                    </thead>
                    <tbody>
                        {props.dataTable.map((item) => {
                            return <tr> 
                              <td> {item.idComentarios} </td>
                              <td> {item.comentario} </td>
                              <td> {item.updatedAt} </td>
                              <td>
                                <div className="row justify-content-center align-middle">        
                                  <button
                                    data-toggle="modal"
                                    data-target="#agregarProducto"
                                    onClick= {() => editPopUp('Modificar comentario','Modificar',`/dashboard/editcomment/${item.idComentarios}?_method=PUT`)}
                                  >
                                    <i className="fas fa-edit fa-1x text-success"></i>
                                  </button>
                                  <form
                                    method="post"
                                    action= {`/dashboard/deletecomment/${item.idComentarios}?_method=DELETE`} 
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
        <PopUpComment props= {propsPopUp}/>     
      </section>
    );
}

export default TableComments;
