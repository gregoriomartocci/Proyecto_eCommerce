import React , {useState,useEffect} from 'react';
import Card from './Card'
import TableComments from './TableComments'

export const Comments = () => {
    
    const [dataTable,setDataTable] = useState([]);
    const [qComment,setComment] = useState(null);
  
    useEffect(() => {
        const getData = async () => {    
        try {
              const response = await fetch('/dashboard/getallcomments');
              const dataAPI = await response.json()
              console.log(dataAPI)
              setComment(dataAPI.length)
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
                                <Card text = 'Q Comentarios' icon = 'fa-comment' color = 'text-secondary' value = {qComment}/>                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
            <TableComments dataTable = {dataTable} />            
        </>
    )
} 