import React , {useState,useEffect} from 'react';
import Nav from './Nav'
import Card from './Card'
import TableProduct from './TableProduct'

export const Product = () => {

    const [dataTable,setDataTable] = useState([]);
    const [sell,setSellData] = useState(null);
    const [qProduct,setQProduct] = useState(null);
  
    useEffect(() => {
        const getData = async () => {    
        try {
              const response = await fetch('/dashboard/getallproducts');
              const dataAPI = await response.json()
              setQProduct(dataAPI.length)
              let totSell = dataAPI.map(item => {return parseInt(item.precio)}).reduce((a,b) => {return a+b})
              setSellData(totSell)
              setDataTable(dataAPI)
       
        } catch (error) {
            console.log(error)
        }
        }
        getData()
    },[])

    return ( 
        <body>
            <Nav/>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                            <div className="row pt-md-5 mt-md-3 mb-5">
                                <Card text = 'Q Productos' icon = 'fa-shopping-cart' color = 'text-warning' value = {sell}/>
                                <Card text = 'Ventas' icon = 'fa-chart-line' color = 'text-danger' value = {qProduct}/>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
            <TableProduct dataTable = {dataTable} />            
        </body>
    )
} 