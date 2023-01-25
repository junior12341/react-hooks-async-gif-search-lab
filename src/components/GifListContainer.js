import React from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";
import { useState, useEffect } from "react";

function GifListContainer (){
    const[gif, setGif] = useState([])
    const[search, setSearch] = useState("")
    // API key
    const myApiKey="IiHgs4mEEOMjcME69I6uxqOBEW4LljQp" ;

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${myApiKey}&rating=g`)
        .then(response => response.json())
        .then(({data}) => {
            const gifs = data.slice(0,3).map((gif)=>({url: gif.images.original.url }));
            setGif(gifs);
        })
        
    }, [search])


    return(
        <>
            <GifSearch search={setSearch} />
            <GifList gifs={gif}/>
        </>
    )
}

export default GifListContainer;