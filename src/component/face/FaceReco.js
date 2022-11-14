import React from "react";
import './face.css'
const FaceReco=({image,box})=>{
    console.log(box)
    return(
       <div className='center ma'>
        <div className="absolute mt2">
        <img id="inputimage" alt='' src={image} width={'500px'} height={'auto'} />
        <div className="bouding-box" style={{top:box.top,left:box.left,bottom:box.bottom,right:box.right}}></div>
        </div>
        </div>
        )
}
export default FaceReco;