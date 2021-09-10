import React from "react";
import Estudiante from "./Estudiante";

const estudiantes=  
[
    {
        "nombre" : "Maria",
        "edad" : 23,
        "genero": "F"
    },
    {
        "nombre" : "Jose",
        "edad" : 25,
        "genero": "m"
    },
    {
        "nombre" : "Mario",
        "edad" : 13,
        "genero": "M"
    },
    {
        "nombre" : "Marinela",
        "edad" : 31,
        "genero": "F"
    },  
]

const Contenedor =() =>(
    <>
        {
            estudiantes.map (c=><Estudiante nombre={c.nombre} edad={c.edad} genero={c.genero}/>)
        }

    </>

);

export default Contenedor;