/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
import React from "react";
import axios from "axios";


/*---------------------------------------------------------------------------*/


const MaquillajeDetail = (props) => {

   const remove = (_id) => {
      axios.get(`http://localhost:5000/Maquillajes/delete/${_id}`)
      .then(function(response) {
         this.setState({
           filtered: response
         })
       }).catch(function(error) {
         console.log(error)
       })
   } 

return(
   <div className="row">
      <div className="col s12">
         <div className="card">
         <div className="card-action blue-grey darken-4">
         <button onClick={remove.bind(this, props.detailMaquillaje._id)} className=" blue-grey white-text btn right" >x</button>
         <h5 className="white-text ">{props.detailMaquillaje.nombre} - {props.detailMaquillaje.marca}</h5>
        

                  </div>
            <div className="card-content darken-2">
               
               
               <p>Marca: {props.detailMaquillaje.descripcion}</p>
               <p>Precio: {props.detailMaquillaje.precio}</p>
               <div>
               <p className="fst-italic">Id: {props.detailMaquillaje._id}</p>
                 </div> 
            
              <hr></hr>
              
            </div>

            
                     {/* <a  href="#!">Fecha: {props.detailMaquillaje.fecha_creacion}</a>                  */}
   
         </div>
      </div>
      
   </div>
  
          
)
}
/*---------------------------------------------------------------------------*/
export default MaquillajeDetail;
/*---------------------------------------------------------------------------*/