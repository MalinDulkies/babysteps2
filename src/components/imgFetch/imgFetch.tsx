import React from 'react';



function IMGFetch(props) {

    const url = props.src;

    return (
        <img src={url} ></img>
    );
}
export default IMGFetch;