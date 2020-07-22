import React /*,{ useEffect, useState }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers/getGifs'

const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([])

    const {data:imagenes, loading} = useFetchGifs(category);
    
     // useEffect(() => {
    //     getGifs(category).then(setImages);
    //  },[category])


 
    //getGifs();
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">loading</p>  }
            <div className="card-grid">
                    {
                        imagenes.map((img) =>(
                                <GifGridItem 
                                    key={img.id}
                                    {...img}
                                />
                        ))
                    }
            </div>
        </>
    )
}

export default GifGrid;
