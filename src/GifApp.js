import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
    // const valor = 'Vespilla';
    let [categories, setCategories] = useState(['Honda', 'Yamaha']);

    const handdleClick=()=>{

        setCategories(['Suzuki', ...categories]);
        
    }

    const primero=()=>{
        categories.shift();
        setCategories([...categories]);
        
    }

    const ultimo=()=>{
        categories.pop();
        setCategories([...categories]);
        
    }
return (
    <>
    <h1>GifApp</h1>
    <hr />
    <AddCategory setCategories={setCategories}/>
    <ol>
        {   
            // categories.map((category, i)=>{
            //     return <li key={i}>{category}</li>
            // })

            categories.map((category) => //aqui si no le ponemos las llaves y devulve lo mismo que recibe sin necesidad de poner return, con las llaves hay que poner return
                <GifGrid
                    key={category}
                    category={category} />
            )

            
        }
    </ol>
    <button onClick={handdleClick}>Añadir</button>
    <button onClick={primero}>Borrar Primero</button>
    <button onClick={ultimo}>Borrar Ultimo</button>
    </>
)
}
