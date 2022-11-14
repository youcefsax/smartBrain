import './App.css';
import React, { Component, useEffect, useState } from 'react';
import NavBar from './component/nav/NavBar';
import Logo from './component/logo/Logo';
import ImageLink from './component/imag/ImageLink';
import Rank from './component/Rank';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import FaceReco from './component/face/FaceReco';
import SignIn from './component/signin/SignIn';
import SignUp from './component/regester/SignUp';
const app= new Clarifai.App({
apiKey:'9f51d1145f91438cbef964281e803477'
});

function App() {
  
  const [input,setInput]=useState('');
  const[image,setImage]=useState('');
  const [box,setBox]=useState({});
  const [signin,setSign]=useState('signin');
  const [isSign,setIsSign]=useState(false);
  const [user,setUser]=useState({
    
    id:'',
    name:'',
    email:'',
    password:'',
    entr:'',
    joined:''
  });

const upLoad=(user)=>{
  setUser({
...user
  })

}
  const onInputChange=(event)=>{
    setInput(event.target.value);
  }
  const calculateFaceLocation=(data)=>{

    const clarifaiData=data.outputs[0].data.regions[0].region_info.bounding_box.top_row;
    const clarifaiDataBottom=data.outputs[0].data.regions[0].region_info.bounding_box.bottom_row;
    const clarifaiLeft=data.outputs[0].data.regions[0].region_info.bounding_box.left_col;
    const clarifaiRight=data.outputs[0].data.regions[0].region_info.bounding_box.right_col;
    const img=document.getElementById('inputimage');
    const imgWidth=Number(img.width);
    const imgheight=Number(img.height);

    return{
    top:clarifaiData*imgheight,
     bottom:imgheight - (clarifaiDataBottom*imgheight),
     left:clarifaiLeft*imgWidth,
     right:imgWidth-(clarifaiRight*imgWidth)
    
    }
  }
  const onRoutChange=(route)=>{
    if(route==='signout'){
      setIsSign(false)
    }else if(route==='home'){
      setIsSign(true)
    }
    setSign(route)
  }
  
  const displayFaceBox=(box)=>{
    setBox(box);
  }
  //submit function
  const onSubmite= () =>{
    setImage(input);
  
  app.models.predict(Clarifai.FACE_DETECT_MODEL,input)
  .then(response=>{
      if(response){
        fetch('http://localhost:3000/image',{
          method:"put",
          mode:"cors",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            id:user.id
          })
        }).then(response=>response.json()).then(count=>setUser({
          ...user,
          entr:count
        }))
      }
     displayFaceBox(calculateFaceLocation(response));
    },
    function(err){
      console.log(err)
    }
  ); 
    
  }
  
  return (
<div className='app'>
  
  <NavBar isSign={isSign} onRoutChange={onRoutChange} />
  {signin==='signin'
  ?<SignIn upLoad={upLoad} onRoutChange={onRoutChange}/>
  :signin==='home'?<div>
  
  <Logo />
  <Rank entr={user.entr} name={user.name}  />

  <ImageLink onInputChange={onInputChange} onSubmite={onSubmite} />
  <ParticlesBg type="polygon" bg={true} />
  
  <FaceReco box={box} image={image}/> 
  </div>:<SignUp onRoutChange={onRoutChange} upLoad={upLoad} />
}
</div>
    )
  }

export default App;
