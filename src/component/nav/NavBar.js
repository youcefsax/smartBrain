import React from "react";

import './navbar.css';
const NavBar =({onRoutChange,isSign})=>{
    if(isSign){
    

        return(
            <nav>
                <p onClick={()=>onRoutChange('signout')} className="f4 link dim black pa2 pointer">Sing Out</p>
            </nav>
        )
    }else{
        return(
            <nav>
                <p onClick={()=>onRoutChange('signin')} className="f4 link dim black pa2 pointer">Sing In</p>
                <p onClick={()=>onRoutChange('signup')} className="f4 link dim black pa2 pointer">Sing Up</p>
            </nav>
        )
    }

}
export default NavBar;