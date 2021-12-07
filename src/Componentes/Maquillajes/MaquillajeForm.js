
import React ,{Component} from "react";
import axios from "axios";

/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/
class MaquillajeForm extends Component{
    
    constructor (props){
        super(props);
        this.state={}
    }

    submitNuevoMaquillaje(event){
      event.preventDefault()
      axios.post('http://localhost:5000/Maquillajes', {
            nombre: this.refs.nombre.value,
            descripcion: this.refs.descripcion.value,
            marca: this.refs.marca.value,
            precio: this.refs.precio.value,
  
      }).then( (respuesta) => { console.log(respuesta) } )
          .catch( error => console.log( error )  )
    }

    render(){
        return(
    
<div className="container center">
  <div className="row">
  <h5 className="center">Nuevo Producto</h5>

    <form className="col s12 center" onSubmit={this.submitNuevoMaquillaje.bind(this)}>

      <div className="row" >
        <div className="input-field col s6">
          <input id="nombre" ref="nombre" />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="input-field col s6">
          <input id="descripcion" ref="descripcion" />
          <label htmlFor="descripcion">Descripción</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input id="marca" ref="marca" />
          <label htmlFor="marca">Marca</label>
        </div>
        <div className="input-field col s6">
          <input id="precio" ref="precio" />
          <label htmlFor="precio">Precio</label>
        </div>
      </div>

      <div className="row">

        <div className="input-field col s3 center-align">
          <button name="action" 
                  type="submit"
                  className="waves-effect waves-light btn"
          >
              Guardar
          </button>
        </div>
      </div>

    </form>

  </div>
  
  </div>
        )
    }

}
/*---------------------------------------------------------------------------*/
export default MaquillajeForm;
/*---------------------------------------------------------------------------*/
