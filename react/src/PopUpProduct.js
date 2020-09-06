import React from 'react';

function PopUpProduct({props}) {
  
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
                      <label for="input">Nombre del Producto</label>
                      <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        id="input"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="input">Precio</label>
                      <input
                        type="text"
                        name="precio"
                        className="form-control"
                        id="input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="input">Marca</label>
                    <input
                      type="text"
                      name="marca"
                      className="form-control"
                      id="input"
                      placeholder="Opcional"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="input">Modelo</label>
                      <input
                        type="text"
                        name="modelo"
                        className="form-control"
                        id="input"
                        placeholder="Opcional"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label for="input">Stock</label>
                      <select id="input" className="form-control" name="stock">
                        <option selected>1</option>
                        <option selected>2</option>
                        <option selected>3</option>
                      </select>
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

export default PopUpProduct
;
