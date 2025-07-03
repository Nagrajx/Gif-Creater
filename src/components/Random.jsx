import React, { useEffect, useState } from "react";

import axios from "axios";
import Spinner from './Spinner'
import useGif from "../hooks/useGif";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loding, setLoading] = useState('false');

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const { data } = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);

    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const { gif, loding, fetchData } = useGif();

    // function clickHandler() {
    //     fetchData();
    // }


    return (
        <div className="bg-green-400 w-1/2   rounded-lg border flex flex-col items-center gap-y-5      ">

            <h1 className="uppercase text-3xl underline font-bold mt-3"> A Random Gif</h1>

            {
                loding ? (<Spinner />) : (<img src={gif} alt="random gif " />)
            }


            <button onClick={() => fetchData()} className="bg-yellow-400 w-10/12 p-3 rounded-md text-lg font-semibold cursor-pointer mb-5 " >
                GENERATE
            </button>
        </div>
    )
}
export default Random