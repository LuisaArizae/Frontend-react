/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
import React from "react";
/*---------------------------------------------------------------------------*/
const MaquillajeList = ( props ) => {
      return(    
      <ul className="collection with-header">
        <li className="collection-header white-text blue-grey darken-4"><h5>Productos:</h5></li>
         {
            props.list.map( (item)=>{
               return(
                  <li className="collection-header black-text darken-3">
                     <a className="pro" href="#!"
                        key= { item._id }
                           onClick = { props.updateMaquillaje.bind(this, item) }
                     >
                        { item.nombre } - { item.marca }
                     </a>
                   </li>
               )
            })
         }
      </ul>
         
      )
}
/*---------------------------------------------------------------------------*/
export default MaquillajeList;
/*---------------------------------------------------------------------------*/