import React from 'react'
import Nav from './Nav'
import Card from './Card'
import Logout from './Logout'
import AgregateProduct from './AgregateProduct'
import TableProduct from './TableProduct'

export const Product = () => {
    return ( 
        <body>
            <Nav title= 'Admin' />
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                            <div className="row pt-md-5 mt-md-3 mb-5">
                                <Card text = 'Cantidad de Productos' icon = 'fa-shopping-cart' color = 'text-warning' />
                                <Card text = 'Ventas' icon = 'fa-chart-line' color = 'text-danger' />    
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
            <TableProduct />
            <Logout />
            <AgregateProduct/>                    
        </body>
    )
} 