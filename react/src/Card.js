import React , {useState,useEffect} from 'react';

function Card(props) {
    const [sell,sellData] = useState([]);
    const [qProduct,setQProduct] = useState({});
  
    useEffect(() => {
        const getData = async () => {    
        try {
              const response = await fetch('/dashboard/getallproducts');
              const dataAPI = await response.json()
              setQProduct(dataAPI.length)
       
        } catch (error) {
            console.log(error)
        }
        }
        getData()
    },[])

    return (           
        <div className="col-xl-3 col-sm-6 p-2">
            <div className="card-common">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <ii className={`fa ${props.icon} fa-3x ${props.color}`}></ii>
                        <div className="text-right text-secondary">
                            <h5>{props.text}</h5>
                            <h3>{qProduct}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Card;
