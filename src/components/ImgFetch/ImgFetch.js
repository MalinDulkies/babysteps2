import React, { useState, useEffect } from "react";

const Gifs = () => {
  const [hasError, setErrors] = useState(false);
  const [gifs, setGifs] = useState({});

  async function fetchData() {
    const res = await fetch("https://api.giphy.com/v1/gifs/random?api_key=54FlpuWL5UPp0bgxRXMuklYyP9StShAG&tag=&rating=g");
    console.log(res);
    res
      .json()
      .then(res => setGifs(res))
      .catch(err => setErrors(err));

      displayData(res.data);
  }

  function displayData(data) {
    var container = document.getElementsByClassName("giphyData");
    data.forEach((url, index) => {
      var div = document.createElement("div");
      div.innerHTML = <img src={url.url}></img>
      container.appendChild(div);
    })
  }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="giphyData">
      {/* <span>{JSON.stringify(gifs)}</span> */}
    </div>
  );
};
export default Gifs;