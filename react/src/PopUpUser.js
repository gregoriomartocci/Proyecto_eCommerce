import React from 'react';

function PopUpUser({props}) {
  
  return (           
    <div className="modal fade" id="agregarProducto" tabindex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="agregar">{props.text}</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action= {props.action} method="POST">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="input">Nombre del Usuario</label>
                      <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        id="input"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="input">Apellido del Usuario</label>
                      <input
                        type="text"
                        name="apellido"
                        className="form-control"
                        id="input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="input">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      id="input"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="input">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="input"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="input">Nivel</label>
                      <input
                        type="text"
                        name="nivel"
                        className="form-control"
                        id="input"
                      />
                    </div>
                  </div>
                  <a href="/dashboard/products">
                    <button type="submit" className="btn btn-primary">{props.button}</button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
  );
}

export default PopUpUser
;