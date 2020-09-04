import React from 'react';

function Logout(props) {
  return (           
    <div className="modal fade" id="sign-out">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Want to Leave!</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                Press logout to leave
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal">
                  Stay Here
                </button>
    
                <a href="/dashboard/logout">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">
                    Log out
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Logout;
