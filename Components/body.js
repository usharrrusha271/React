import React,{useState} from 'react'

const Body=()=>{
  const {count,setCount}=useState(0)
  return(
    <div>
      <a target="_blank"href="instagram.jpg">
        <img src="instagram.jpg" alt="usha" height="100"width="100"></img>
      </a>
      
      <button onClick={()=>setCount(count+1)}></button>
        <p>Likes:{count}</p>
      

      </div>
  )
}