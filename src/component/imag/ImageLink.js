import React from "react";
import './image.css'
function ImageLink({onInputChange,onSubmite}){
    return(
        <div >
            <p className="f3 center">
                {'this is the brain app ,it will detect your face in an image'}
            </p>
            <div className="center">
                <div className="pa4 br3 shadow-5 center form">
                <input className="f5 pa2 w-70 center ba b--white-025" type={'text'} onChange={onInputChange}></input>
                <button className="w-30 grow  link ph3 pv2 dib white bg-light-purple ba b--white-025" onClick={onSubmite}>detect</button>
                </div>
            </div>
        </div>
        )
}
export default ImageLink;