import React from 'react';

function TableProduct(props) {

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
                    {/*<tbody>
                      <% products.forEach(product => { %>
                      <tr>
                        <td><%= product.idProducto %></td>
                        <td>
                          <a href="/dashboard/products<%= product.idProducto %>"
                            ><%= product.nombre %></a
                          >
                        </td>
                        <td><%= product.precio %></td>
                        <td>
                          <div className="row justify-content-center align-middle">
                            <!-- Edit Button -->
  
                            <button
                              data-toggle="modal"
                              data-target="#update<%= product.idProducto%>"
                            >
                              <i className="fas fa-edit fa-2x text-success"></i>
                            </button>
  
                            <!-- Delete Button -->
  
                            <form
                              method="post"
                              action="/dashboard/products/delete-product/<%= product.idProducto %>"
                            >
                              <button>
                                <i className="fas fa-trash-alt fa-2x text-danger"></i>
                              </button>
                            </form>
                          </div>
  
                          <div
                            className="modal fade"
                            id="update<%= product.idProducto%>"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="update"
                          >
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4
                                    className="modal-title"
                                    id="updateProduct<%= product.idProducto %>"
                                  >
                                    Editar Producto
                                  </h4>
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
                                  <form
                                    action="/dashboard/update-product/<%= product.idProducto %>"
                                    method="POST"
                                  >
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label for="input"
                                          >Nombre del Producto</label
                                        >
                                        <input
                                          type="text"
                                          name="nombre"
                                          className="form-control"
                                          id="input"
                                          value="<%= product.nombre %>"
                                        />
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label for="input">Precio</label>
                                        <input
                                          type="text"
                                          name="precio"
                                          className="form-control"
                                          id="input"
                                          value="<%= product.precio %>"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label for="input">Categoria</label>
                                      <input
                                        type="text"
                                        name="Categoria"
                                        className="form-control"
                                        id="input"
                                        placeholder="Opcional"
                                      />
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
                                        <select>
                                          id="input" className="form-control"
                                          name="Stock" >
                                          <option selected>1</option>
  
                                          <% for (let i = 2; i < 10; i++) { %>
                                          <option><%= i %></option>
                                          <% } %>
                                        </select>
                                      </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                      Guardar Cambios
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <% }) %>
                      </tbody>*/}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default TableProduct;
