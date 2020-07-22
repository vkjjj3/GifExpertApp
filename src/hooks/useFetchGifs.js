import { useState } from "react";
import {getGifs} from '../helpers/getGifs';


export const useFetchGifs = (category) =>{
    
    const [state, setState] = useState({
        data:[],
        loading:true,
    })

    useState(()=>{
        getGifs(category).then(imgs=>{

              setState({
                    data:imgs,
                    loading:false
               })}
               
        )
    },[category]);


  


    return state;


}