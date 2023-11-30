// import React from 'react'

// const SignUp = () => {
//   return (
//     <div><br/><br/><br/><br/><br/>
//      <form>
//      <h2>SignUp</h2>
//      <p> Name: <input type='text' name='name' id='' placeholder='Enter name'/><br/>
//        email: <input type='email' name='email' id='' placeholder='Enter email'/><br/>
//      Phone No: <input type='phone' name='phone' id='' placeholder='phone no'/><br/>
//      Address: <input type='text' name='address' id='' placeholder='Enter address'/><br/></p> 
//      <button>SignUp</button>
//      </form>
      
//     </div>
//   )
// }

// export default SignUp
import React, { useState } from 'react';
import "./App.css"
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userNames, setUserNames] = useState([]);

  const handlePost = () => {
    axios.post('http://localhost:5000/register', { name, email })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName("");
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

  const handleGet = () => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        const users = response.data;
        const names = users.map((user) => user.name);
        setUserNames(names);
      })
      .catch((error) => {
        console.error("GET request error:", error);
      });
  }

  return (
    <div className="container"><br/><br/><br/><br/>
      <h1>This is React WebApp</h1>
      <form>
      <label>Enter Name&nbsp;&nbsp;</label>
        <input
          type="text"
          className="input-field" 
          placeholder="ur name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Enter Email:&nbsp;&nbsp;</label>
        <input
          type="email"
          className="input-field"
          placeholder="Enter ur email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <button type="button" onClick={handlePost}>Post</button>
        <button type="button" onClick={handleGet}>Get</button>
      </form>
      <p>Names: {userNames.join(", ")}</p>
    </div>
  );
}

export default App;