import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./Game"

function Spg() {
  const [imgUrl, setImgUrl] = useState("")


  // On page load, check if there is an image in the URL query params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img")) //Game state is updated to the img we have the url for
    }
  }, [])

  const handleImageChange = (e) => { 
    setImgUrl(e.target.value)
    window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
  }

  return (
    <div className="spg">
      <h1>React sliding puzzle</h1>
      <Board imgUrl={imgUrl} />
      <input value={imgUrl} onChange={handleImageChange} />
    </div>
  );
}

export default Spg;