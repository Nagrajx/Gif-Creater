import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const Tags = () => {

    // const [gif, setGif] = useState('');
    // const [loding, setLoading] = useState('false');
    const [tag, setTags] = useState("car ");
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const { data } = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const { gif, loding, fetchData } = useGif(tag);

    // function clickHandler() {
    //     fetchData();
    // }


    return (
        <div className="bg-blue-500 w-1/2   rounded-lg border flex flex-col items-center gap-y-5      ">

            <h1 className="uppercase text-3xl underline font-bold mt-3">  Random {tag} Gif </h1>

            {
                loding ? (<Spinner />) : (<img src={gif} alt="random gif " />)
            }


            <input type="text"
                className="bg-white w-10/12 rounded-md p-3 text-center"
                onChange={(event) => setTags(event.target.value)}
                value={tag}
                placeholder="Type here what type Gif you want"
            />

            <button onClick={() => fetchData(tag)} className="bg-yellow-400 w-10/12 p-3 rounded-md text-lg font-semibold cursor-pointer mb-5 " >
                GENERATE
            </button>
        </div>
    )
}
export default Tags