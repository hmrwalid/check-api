import React,{useState, useEffect} from "react";
import axios from "axios";
export const UserList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData =()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response =>setData(response.data))
            .catch(error=> console.log(error))
        }
        fetchData()
    }, [])


    return (
        <div className="card-container">
           {data.map((elm,i )=>{ 
               return(
                   <div key={i}>
                       <div className="card">
                       <div className="card-img"></div>
                       <div className="card-titel"> {elm.name}</div>
                       <div className="card-text">
                       <div className="p"> <h4>Email</h4>: {elm.email}</div>
                           <div className="p"><h4>Phone</h4>: {elm.phone}</div>
                           <div className="p"> <h4>Website</h4> : {elm.website}</div>
                           <div className="p"><h4>Address</h4> : {elm.address.city}</div>
                           </div>
                       </div>
                
                   </div>
                   
               )
           })} 
        </div>
    )
}
