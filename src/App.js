import "./App.css";
import React, { useState } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

const App = () => {

  const [imageName, setImageName] = useState('')

  const submitForm = (form) => {
    setImageName(form)
  };


    return (
      <div className="App">
        <Searchbar onSubmit={submitForm} />
        <ImageGallery imageName={imageName} />
      </div>
    );
  
}

export default App;
