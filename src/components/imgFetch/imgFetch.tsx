import React, {useState, useEffect}from 'react';



function IMGFetch(props) {

        const [state, setState] = useState([])
        const [query, setQuery] = useState()
        useEffect(() => {
            fetch("/api/data?q=" + query).then(
                res => setState(res.data)
            )
        }, [query])
        function searchQuery(evt) {
            const value = evt.target.value
            setQuery(value)
        }
        return (
            <>
                {state.map( d => <div>{d}</div>)}<input type="text" placeholder="Type your query" onEnter={searchQuery} />  
            </>
        )
    }
}
export default IMGFetch;