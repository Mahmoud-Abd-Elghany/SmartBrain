import React, {useState, useEffect} from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Image from "./components/Image/Image"

function App() {
  const [image, imageChange] = useState("");
  const Clarifai = require('clarifai');
  const app = new Clarifai.App({
    apiKey: 'f16c637d19a6480092f9984c3b0b3665'
  });

  useEffect(()=>{
    console.log(image)
  },[image])

  const submitHandler = () => {
    //Tags Api
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(image);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts']
        console.log(response);
      });

      //Colors Api
    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", image).then(
      function(response) {
        console.log(response)
      },
      function(err) {
        // there was an error
      }
  );
  }

  return (
    <div>
        <Navigation/>
        <Rank/>
        <ImageLinkForm changeHandler={imageChange} submitHandler={submitHandler}/>
        <Image image={image}/>

    </div>
  );
}

export default App;
