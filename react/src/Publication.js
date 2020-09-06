import React , {useState,useEffect} from 'react';
import Card from './Card'
import TablePublication from './TablePublication'

export const Publication = () => {
    
    const [dataTable,setDataTable] = useState([]);
    const [qPublication,setQPublication] = useState(null);
    const [qUser,setQUser] = useState(null);
  
    useEffect(() => {
        const getData = async () => {    
        try {
              const response = await fetch('/dashboard/getallpublication');
              const dataAPI = await response.json()
              setQPublication(dataAPI.length)
              let totUser = dataAPI.map(item => {return item.idUsuario})
              let arrUser = [...new Set(totUser)]
              setQUser(arrUser.length)
              setDataTable(dataAPI)
       
        } catch (error) {
            console.log(error)
        }
        }
        getData()
    },[])

    return ( 
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                            <div className="row pt-md-5 mt-md-3 mb-5">
                                <Card text = 'Q Publicaciones' icon = 'fa-cart-plus' color = 'text-success' value = {qPublication}/>
                                <Card text = 'Q Usuarios' icon = 'fa-users' color = 'text-primary' value = {qUser}/>                      
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
            <TablePublication dataTable = {dataTable} />            
        </>
    )
} 