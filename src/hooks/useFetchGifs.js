import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {


    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        //recuperamos los gifs
        getGifs(category)
        .then( (gifs) => {
                // setTimeout 
                setTimeout( ()=> {
                    console.log(gifs);
                    setState({
                        
                        data: gifs,
                        loading: false
                    })
                }, 3000)
            }
        )
        

    }, [category])

    

    return state;
}