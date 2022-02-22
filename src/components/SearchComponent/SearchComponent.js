import React, { useState, useEffect } from "react";
import GifsComponent from "../GifsComponent/GifsComponent";
import './SearchComponent.css';

const SearchComponent = () => {
    const [search, setSearch] = useState('');
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState([]);
    const [trending, setTrending] = useState(true);


    let getSearch = (e) => {
        setSearch(e.target.value);
    }

    async function fetchSearch() {
    try {
        const res = await fetch("https://api.giphy.com/v1/gifs/search?api_key=KS4crewOTMX1oXDXIN4eK35wHHX2D8N3&q="+ search + "&limit=5");
        const result = await res.json();
        setData(result.data);
        setTrending(false);

    } catch (error) {
        setErrors(error);
    }
}

useEffect(() => {
    if(search === ''){
        setTrending(true);
    }
}, [search]);

    return (
        <div>
            <div className="search">
                <input type="text" id="searchInput" onChange={getSearch} placeholder="What are you looking for?" />
                <button onClick={fetchSearch}>Search</button>
            </div>

            {trending ? <GifsComponent /> : 

            <div className="giphyData">
                {data.map((entry) => {
                    return (
                        <img className="data" key={entry.id} src={entry.images.downsized_large.url} />
                    )
                })
                }
            </div>
            }

        </div>
    )
};

export default SearchComponent;
