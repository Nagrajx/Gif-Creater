import React, { useEffect,useState } from "react";
import axios from "axios";
import Tags from "../components/Tags";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const useGif = (tag) => {
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  
    const [loding, setLoading] = useState('false');
    const [gif,setGif] = useState(' ');
    async function fetchData(tag ) {
        setLoading(true);

        const { data } = await axios.get(tag ? tagUrl : randomUrl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    }, [])

    return {gif,loding,fetchData};
}

export default useGif