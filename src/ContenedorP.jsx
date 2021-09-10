import React from "react";
import Personaje from "./Personaje";

const personajes=  
[

     {
        "nombre" : "Luffy",
        "edad" : 19,
        "genero": "m",
        "img":"https://cdn.alfabetajuega.com/wp-content/uploads/2020/08/Luffy-780x405.jpg"
    },
    {
        "nombre" : "zoro",
        "edad" : 21,
        "genero": "M",
        "img": "https://www.seekpng.com/png/full/166-1667861_zoro-0-one-piece-personajes-principales.png"
    },
    {
        "nombre" : "Nami",
        "edad" : 20,
        "genero": "F",
        "img":"https://pm1.narvii.com/6189/987ff4e753a3286317efb6bf4290fc4e5bf75cff_hq.jpg"
    },
    {
        "nombre" : "Usopp",
        "edad" : 20,
        "genero": "M",
        "img":"https://latiendaonepiece.com/wp-content/uploads/2020/11/usopp.jpg"
    },  
    {
        "nombre" : "Robin",
        "edad" : 30,
        "genero": "F",
        "img":"https://pm1.narvii.com/6347/92ad1d6ae3d9beba62d8f22fefef5d37da0aac7a_hq.jpg"
    },  
    {
        "nombre" : "Franky",
        "edad" : 36,
        "genero": "M",
        "img":"http://1.bp.blogspot.com/-jUszfukKBF4/VD1JWXt0KxI/AAAAAAAABCY/9pVdLcjdI6Y/s1600/3741574-franky2.jpg"
    },  
    {
        "nombre" : "Chopper",
        "edad" : 17,
        "genero": "M",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlpgYVmv1K3Du5ZQtSalz8LEOmgEBM_6aCQ&usqp=CAU"
    },  
    {
        "nombre" : "Sanji",
        "edad" : 21,
        "genero": "M",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQy7_rHynDSwlRlJnzluGwp4ZPCNvESFlSMA&usqp=CAU"
    },  
    {
        "nombre" : "Brook",
        "edad" : 90,
        "genero": "M",
        "img":"https://i.pinimg.com/originals/8e/2f/71/8e2f715f071f8d517f7ce658a7dfc3e0.png"
    },  
    {
        "nombre" : "Jinbei",
        "edad" : 44,
        "genero": "M",
        "img":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0de501f-55df-46c0-a606-a7f78ac28774/d7r7etf-a7cd63a8-0e9b-4217-a33e-331a5003cc5b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9iMGRlNTAxZi01NWRmLTQ2YzAtYTYwNi1hN2Y3OGFjMjg3NzQvZDdyN2V0Zi1hN2NkNjNhOC0wZTliLTQyMTctYTMzZS0zMzFhNTAwM2NjNWIuanBnIn1dXX0.s5T1HvCYzHgS5vtGQOwIeFx9Qmj4uNqu6lBeovBfqDw"
    },  
]

const Contenedor =() =>(
    <>
        {
            personajes.map (conten=><Personaje nombre={conten.nombre} edad={conten.edad} genero={conten.genero} img={conten.img}/>)
        }

    </>

);

export default Contenedor;