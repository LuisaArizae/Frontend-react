/*---------------------------------------------------------------------------*/
/*estilos*/
import './App.css';
/*---------------------------------------------------------------------------*/
/*dependencias de los componentes*/
import React, {Component} from 'react';
import axios from 'axios';
import MaquillajeList from './Maquillajes/MaquillajeList';
import MaquillajeDetail from './Maquillajes/MaquillajeDetail';
import MaquillajeForm from './Maquillajes/MaquillajeForm';
import logo from '../assets/img/makeup.png';
/*---------------------------------------------------------------------------*/
/*Refactorar*/
class App extends Component {

  constructor(props){
    super(props);
  /*Los componentes que se van a trabajar*/
    this.state ={
      maquillajes: [],
      maquillajeActual: {},
    }
  /*vincular la funcion de actualizar el componente*/
    this.actualizarMaquillajeActual = this.actualizarMaquillajeActual.bind(this)
  }
  /*Llamar a la API Rest*/
  componentDidMount(){
    const url = "http://localhost:5000/Maquillajes"
    axios.get(url)
          .then((respuesta) => { this.setState ({ maquillajes: respuesta.data })
            console.log(respuesta.data)
          })
          .catch((error) => { console.log ( error ) })
  }

  /*Funcion para saber el estado de la persona actual (Detalle)*/
  actualizarMaquillajeActual(maquillaje){
      //Actualizar el estado:
      this.setState({
        maquillajeActual: maquillaje
      })
  }

  /*Renderizar la estructura HTML que viene del return*/
  render(){
    return (
      <div className="container-fluid">
          <div className="row abs">
              
                <nav>
                  <div className="nav-wrapper  s12">
                    <a href="#!" className="brand-logo right"><img src={logo}></img></a>
                    <a href="#!" className="brand-logo left"> MAKEUP </a>

                  </div>
                  <hr className="line"></hr>
                </nav>
              
          </div>
  
          <div className="row">
              {/* Se llama al objeto persona donde se van a mostrar */}
              <div className="col s2 m2" >
                  <MaquillajeList 
                    list={ this.state.maquillajes } 
                      updateMaquillaje={ this.actualizarMaquillajeActual }
                    />
              </div>
              {/* Se llama al objeto persona donde se van a mostrar los seleccionados*/}
              <div className="col s10 abs">
                  <MaquillajeDetail
                    detailMaquillaje={ this.state.maquillajeActual }
                  />
              </div>
          </div>
  
          <div className="abs">
              {/* Se llama al objeto persona donde se van a mostrar */}
              <div className="col s12"><MaquillajeForm /></div>
          </div>
      </div>
    );
  }

}
/*---------------------------------------------------------------------------*/
/*Exportación*/
export default App;
/*---------------------------------------------------------------------------*/
