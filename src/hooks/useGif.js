
import { useEffect, useState } from 'react'
import axios from 'axios';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => {
     
    const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


        const [gif, setGif] = useState('');
        const [loading, Setloading] = useState('false');
        


        async function fetchData(tag) {

            Setloading(true);
            const { data } = await axios.get(tag ? tagMemeurl : randomMemeurl ) ;
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
            Setloading(false);
        }

        useEffect(() => {
            fetchData();
        }, [])

        return { gif, loading , fetchData }
    }


export default useGif   