import React,{Component} from "react";
import Tilt from 'react-parallax-tilt';
import brain from'./icons8-brain-80.png'

class Logo extends Component{
    render(){
    return (
       <div className="ma4 mt0 mb0">
        <Tilt className="tilt br2 shadow-2" options={{max:'25'}} style={{height:'100px',width:'100px'}}>
      <div className="tilt-inner pa3">
        <img src={brain} className="pa1" alt='ben'></img>
      </div>
    </Tilt>
       </div>
       

    )
}
}
export default Logo;