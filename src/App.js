import React, {useState, useEffect} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

function App() {
  const [image, imageChange] = useState("");

  useEffect(()=>{
    console.log(image)
  },[image])

  const submitHandler = () => {
    console.log("Done");
  }
  
  return (
    <div>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm changeHandler={imageChange} submitHandler={submitHandler}/>

    </div>
  );
}

export default App;
