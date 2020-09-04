import React from 'react';

function Card(props) {
  return (           
    <div className="col-xl-3 col-sm-6 p-2">
        <div className="card-common">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <ii className={`fa ${props.icon} fa-3x ${props.color}`}></ii>
                    <div className="text-right text-secondary">
                        <h5>{props.text}</h5>
                        {/*<h3><%= products.length %></h3>*/}
                    </div>
                </div>
                <div className="card-footer">
                <i className="fas fa-sync mr-2"></i>
                <span>Actualizar</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
