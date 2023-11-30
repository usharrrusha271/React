/*import React, {Component} from 'react';
class Header extends Component {
    render() {
        return <h2>Welcome to  Instagram </h2>;


    }

}
export default Header*/

/*import React ,{ useState} from 'react'

const Header = () => {
    const [name,setName]=useState("Bhagya")
  return (
    <div>
      <h1>My  name is  {name}</h1>
      <button onClick={()=>NamedNodeMap("Usha")}>Click here</button>
    </div>
  )
}

export default Header*/
/*import React, {useState} from 'react'

const Header = () => {
  const [name,setName]=useState(["ushu","ashu","moni"])
  const [index,setIndex]=useState(0)
  return (
    <div>
    Name:{name[index]}
    <button onClick={()=>setIndex((index+1)%name.length)}>Click here </button>
    </div>
  )
}

export default Header*/

/*import React ,{useState,useEffect} from 'react'
import "./Header.css"

const Header = () => {
  const[sec,setSec]=useState(0)
  const[min,setMin]=useState(0)
    useEffect(()=>{
      setTimeout(()=>{
        setSec(sec+1)
      },1000)
    })
    useEffect(()=>{
      setTimeout(()=>{
        setMin(min+1)
      },60000)
    })
  return (
    <div>
      <h1 style={{color:"blue"}}>minute:{min%60}</h1>
        <h2>second:{sec%60}</h2>
    </div>
  )
}

export default Header*/
/*import React, { useState } from 'react'

const Header = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    function setting(){
      setName(name)
      setEmail(email)
    }
  return (
    <div>
      Name:{name}<br/>
      Name:<br/>
      <input type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={setting}>Click here</button><br/>
      email:{email}<br/>
      email:<br/>
      <input type='email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <button onClick={setting}>Click here</button>
    </div>
  )
}

export default Header*/
