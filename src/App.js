/*import React from 'react';
// import Layout from './Components/Layout';
// import Home from './Components/Home';
// import Vlogs from './Components/Vlogs';
// import Blogs from './Components/Blogs';
//import ToDoList from './Components/ToDoList';
//import Project from './Components/Project';                    
//import About from'./Components/About';
//import Contact from './Components/Contact';
//import Application from './Components/Application';
//import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Student from './Components/Students';
 function App() {
  return(
    <div>
    
    <Student/>
    
  
       /* <Router>
      <Layout/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/vlogs' element={<Vlogs/>}/>


        </Routes>

      </Router>*/
      

 /*   
  );
}
export default App;

/*import React from 'react'
import { Components } from 'react'
import Header from './Components/Header'
import Body from './Components/body'
import Footer from './Components/Footer'

const App = () => {
  return (

    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>   
       </div>
  )
}

export default App*/
/*import React from 'react';

function App() {
  const rollNumber = "your_roll_number";
  const url = `https://api.example.com/students/${rollNumber}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Do something with the data
    })
    .catch(error => console.error(error));

  return (
    <div>
      /* Your HTML content goes here */
   /* </div>
  );
}

export default App;*/
// import React from 'react';
// import Loading from './Components/Loading';
// import Student from './Components/Student';
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//  const App=()=>{
//   return(
//     <div>
//       <Student/>
//       <Loading/>
//     </div>
//   )
//  }
// export default App;


/*import React from 'react'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      </div>
  )
}

export default App*/


/*import React from 'react'
import ReactForm from './Components/ReactForm';

const App = () => {
  return (
    <div>
      <ReactForm/>
    
      
    </div>
  )
}

export default App*/
/*import React from 'react'
import { useState} from 'react';
import './App.css';
 function App(){
  const [inputarr,setInputrr]=useState([])
  const [inputdata,SetInputdata]=useState([])
  function changehandle(e){
    SetInputdata({
      ...inputdata,[e.target.name]:e.target.value
    })    

  }
  let {name,rollNo}=inputdata;

  function changhandle(){
    setInputrr([...inputarr,{name,rollNo}])
    
    console.log(inputdata,"input data what we Enter")
    SetInputdata({name:"",rollNo:""})
  
  function changhandle2(){
    console.log("Object store inarray",inputarr)
    
  }
  return(

    <div className="App">
      <input 
      type="text" 
       autoComplete='off'
       name='name'
        value={inputdata.name}
         onChange={changehandle}
         placeholder="Enter Name"/><br></br>
      <input 
      type="text" 
      autoComplete='off' 
      name='rollNo' 
      value={inputdata.rollNo} 
      onChange={changehandle}
      placeholder="Roll no"/><br></br>
      <button onclick={changhandle}>Add It</button>
      <button onclick={changhandle2}>Chech Array in console</button>



<table border={1}  width="30%" cellPadding={10}>
  <tbody>
<tr>
  <td>Name</td>
  <td>Roll No</td>
  </tr>
  {
    inputarr.map(
      (info,ind)=>{
        return(
          <tr key={ind}>
            <td>{info.name}</td>
            <td>{info.rollNo}</td>
          </tr>
        )
      }
    )
  }
  </tbody>
  </table>
  </div>
  );
  }
}
 

export default App;*/
/*import React from 'react'
import {useState} from 'react';
import './App.css';
import changhandle from 'react';
import deletehandle from 'react';
import handleSubmit from 'react';

function App()
{
  return(
    <div classPro='App'></div>
  )
}


function App() {
  const [inputarr,setInputarr]=useState([])
  const [inputdata,SetInputdata]=useState({name:"",rollNo:""})
  function changehandle (e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})}
    let {name,rollNo}=inputdata;
    function changhandle(){
      setInputarr([...inputarr,{name,rollNo}])
      console.log(inputdata,"input data what we Enter") 
       SetInputdata({name:"",rollNo:""})
    }
    let delethandle=(i)=>{
      let newdataArr=[...inputarr]
      newdataArr.splice(i,1)
      setInputarr(newdataArr)
    }

      function changhandle2()
      {
        console.log("Object store in array",inputarr)
         fetch("https://jsonplaceholder.typicode.com/users",{ method: 'POST',headers:{"Accept":"application/json","Content-Type":"application/json"},
        body:JSON.stringify(inputdata)
        }).then((result) =>{result.JSON() 
        .then((result)=>{ console.log("result",result)
      })
        })
      }
      return(
        <div className="App">
          <input type="text" autoComplete='on'
          name='name' value={inputdata.name} onChange={changehandle}
        placeholder="Enter Name"/>
        <input type="text" autoComplete='on' name='rollNo' value={inputdata.rollNo}onChange={changehandle}
        placeholder="Roll no"/>
       <button onClick={changhandle}>Add It
        </button><br/>
        
        <table border={1} width="30%" cellPadding={10}>
          <tbody>
            <tr>
              <td>Sr.No</td>
              <td>Name</td>
              <th>Roll No</th>
            
              </tr>
              { inputarr.length<1 ? 
              <tr>
                <td colspan={4}>No data Enter yet !</td>
                
              </tr>:
              inputarr.map((info,ind) =>{
                return(
                  <tr key={ind}>
                    <td>{ind+1}</td>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                    

                  </tr>
                )
              })
              
            }
              </tbody></table>
        </div>
      );
          }

    export default App;*/
    /*import React from 'react'
import {useState} from 'react';
import './App.css';
import changhandle from 'react';
import deletehandle from 'react';
import handleSubmit from 'react';
import Studentdata from 'Studentdata';
function App(){
  return(
    <div>
      <Studentdata/>
    </div>
  )

}


export default App;*/

/*function App() {
  const [inputarr,setInputarr]=useState([])
  const [inputdata,SetInputdata]=useState({name:"",rollNo:""})
  function changehandle (e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})}
    let {name,rollNo}=inputdata;
    function changhandle(){
      setInputarr([...inputarr,{name,rollNo}])
      console.log(inputdata,"input data what we Enter") 
       SetInputdata({name:"",rollNo:""})
    }
    let delethandle=(i)=>{
      let newdataArr=[...inputarr]
      newdataArr.splice(i,1)
      setInputarr(newdataArr)
    }

      function changhandle2()
      {
        console.log("Object store in array",inputarr)
         fetch("https://jsonplaceholder.typicode.com/users",{ method: 'POST',headers:{"Accept":"application/json","Content-Type":"application/json"},
        body:JSON.stringify(inputdata)
        }).then((result) =>{result.JSON() 
        .then((result)=>{ console.log("result",result)
      })
        })
      }
      return(
        <div className="App">
          <input type="text" autoComplete='on'
          name='name' value={inputdata.name} onChange={changehandle}
        placeholder="Enter Name"/>
        <input type="text" autoComplete='on' name='rollNo' value={inputdata.rollNo}onChange={changehandle}
        placeholder="Roll no"/>
       <button onClick={changhandle}>Add It
        </button><br/>
        
        <table border={1} width="30%" cellPadding={10}>
          <tbody>
            <tr>
              <td>Sr.No</td>
              <td>Name</td>
              <th>Roll No</th>
            
              </tr>
              { inputarr.length<1 ? 
              <tr>
                <td colspan={4}>No data Enter yet !</td>
                
              </tr>:
              inputarr.map((info,ind) =>{
                return(
                  <tr key={ind}>
                    <td>{ind+1}</td>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                    

                  </tr>
                )
              })
              
            }
              </tbody></table>
        </div>
      );

      }*/
      /*import React from 'react'
import {useState} from 'react';
import changhandle from 'react';
import deletehandle from 'react';
import handleSubmit from 'react';
import Studentdata from './Components/Studentdata';
    


function App() {
      return(
        <div>
          <Studentdata/>
        </div>
      );

      }
    export default App;*/
    /*import React from 'react'
import Name from './Components/Name'

const App = () => {
  return (
    <div>
      <Name/>
    </div>
  )
}

export default App*/
import React from 'react'
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import NavbarStyles from'./Components/NavbarStyles.css';
import Home from './Components/Home';
import Departments from './Components/Departments';
import About from './Components/About';
import Contact from './Components/Contact';
import {useState} from 'react';
import changhandle from 'react';
import deletehandle from 'react';
import handleSubmit from 'react';
import Studentdata from './Components/Studentdata';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className='App'>
      <Router>
    <Navbar/>
    
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/departments' element={<Departments/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/studentdata' element={<Studentdata/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       
     </Routes> 
   </Router>
   
    </div>
    
  )
}

export default App;