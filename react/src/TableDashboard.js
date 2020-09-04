import React , {useState,useEffect} from 'react';

function TableDashboard(props) {
    const [data,setData] = useState([]);

    useEffect(() => {
        const getAllData = async () => {    
        try {
            const response = await fetch('/dashboard/getalluser');
            const dataAPI = await response.json()
            setData(dataAPI)
        } catch (error) {
            console.log(error)
        }
        }
        getAllData()
    },[])

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
                            data-toggle="modal"
                            data-target="#myModal"
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
                            <th>email</th>
                            <th>Password</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item) => {
                            return <tr> 
                            <td> {item.idUsuario} </td>
                            <td> {item.email} </td>
                            <td> {item.password} </td>
                            <td> {item.updatedAt}</td>
                            </tr>
                        })}
                        </tbody>
                        {/*<tbody>
                        <% users.forEach(user => { %>
                        <tr>
                            <td><%= user.idUsuario %></td>
                            <td>
                            <a href="/dashboard/<%= user.idUsuario %>"
                                ><%= user.email %></a
                            >
                            </td>
                            <td><%= user.password %></td>
                            <td>
                            <form
                                method="post"
                                action="/dashboard/<%= user.idUsuario %>?_method=DELETE"
                            >
                                <button>
                                <i className="fas fa-trash-alt fa-lg text-danger"></i>
                                </button>
                            </form>

                            <form
                                method="post"
                                action="/dashboard/<%= user.idUsuario %>?_method=DELETE"
                            >
                                <button>
                                <i className="fas fa-edit fa-lg text-success"></i>
                                </button>
                            </form>
                            </td>
                        </tr>
                        <% }) %>
                        </tbody> */}
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default TableDashboard;
