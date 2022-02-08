import React, { useState, useEffect } from "react";
import './ImgFetch.css';

const Gifs = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=54FlpuWL5UPp0bgxRXMuklYyP9StShAG");
      console.log(res);
      const result = await res.json();
      setData(result.data);
      console.log({ result, type: typeof result });

    } catch (error) {
      setErrors(error);
    }
  }

  // function displayData(data) {
  //   var container = document.getElementsByClassName("giphyData");
  //   data.forEach((url, index) => {
  //     var div = document.createElement("div");
  //     div.innerHTML = <img src={url.url}></img>
  //     container.appendChild(div);
  //   })
  // }

  useEffect(() => {
    fetchData();
  }, []);


  if (!data.isArray) {
    return (
      <div className="background">
        <div className="giphyData">
          {data.map((entry) => {
            return (
              <img className="data" key={entry.id} src={entry.images.downsized_large.url} />
            )
          })
          }
        </div>
      </div>
    )
  } else {
    return (
      <img src="https://static.parade.com/wp-content/uploads/2018/09/google-dog-questions-ftr.jpg" />
    );
  };
};
export default Gifs;
