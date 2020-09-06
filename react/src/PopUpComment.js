import React from 'react';

function PopUpComment({props}) {
  
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
                      <label for="input">Id Publicación</label>
                      <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        id="input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="input">Comentario</label>
                    <input
                      type="text"
                      name="Categoria"
                      className="form-control"
                      id="input"
                    />
                  </div>
                  <a href="/dashboard/comments">
                    <button type="submit" className="btn btn-primary">{props.button}</button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
  );
}

export default PopUpComment
;
