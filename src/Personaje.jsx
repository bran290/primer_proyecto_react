import React from "react";
import PropTypes from'prop-types'

const Personaje =({nombre,edad,genero,img}) =>(
<>
    <div className="card" style={  {width: '30rem'}  }>     
        <div className="card-body">
            <table >
                <tr>
                    <td style={  {padding: '40px'}  }>
                        <h5 className="card-title">{nombre }</h5>
                        <p className="card-text">Edad: {edad}</p>
                        <p className="card-text">Genero: {genero}</p>
                    </td>
                    <td><img src={img} alt=""style={  {width: '15rem'}  } /></td>
                </tr>
            </table>
            
            
            
        </div>
    </div>  
</>

);

Personaje.propTypes ={
    nombre:PropTypes.string,
    edad:PropTypes.number,
    genero:PropTypes.string,
    img:PropTypes.string
}

Personaje.defaultProps = {
    nombre:"Nombre no asignado",
    edad:"Edad no asignada",
    genero:"genero no asignado" ,
    img:"No se encontro ninguna imagen"

}

export default Personaje;