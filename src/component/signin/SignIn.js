import React, { useState } from "react";

const SignIn=({onRoutChange,upLoad})=>{
let a;
  const [email,setEmail]=useState('');
  const onemailchange=(event)=>{
    setEmail(event.target.value);
  }
  const [password,setPassword]=useState('');
  const onPasswordchange=(event)=>{
    setPassword(event.target.value);
  }
  const onsubmitSignIn=()=>{
    fetch('http://localhost:3000/signin',{
      method:"post",
      mode:"cors",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:email,
        password:password
      })
    }).then(response=>response.json())
    .then(user=>{
      if(user.id){
        upLoad(user);
        console.log(upLoad(user));
        onRoutChange('home');
      }
    });
    

    
       }
       
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
<main className="pa4 black-80">
        <form className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6 tc" for="email-address">Email</label>
            <input onChange={onemailchange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6 tc" for="password">Password</label>
            <input onChange={onPasswordchange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
          </div>
          
        </fieldset>
        <div className="center">
          <input  onClick={onsubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in" />
        </div>
        <div className="lh-copy mt3">
          <p onClick={()=>onRoutChange('reg')} className="f6 link dim black db tc pointer">Sign up</p>
          
        </div>
      </form>    
      </main>
      </article>
      )
}
export default SignIn