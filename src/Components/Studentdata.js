/*import React from 'react';
import './App.css'
import {useState} from 'react';
const Studentdata = () => {
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

export default Studentdata*/
import React from 'react';
import './App.css'
import image from './background.jpg';
import {useState} from 'react';
const myStyle={
 backgroundImage:`url(${image})`,
 backgroundSize:'cover',
 backgroundRepeat:'no-repeat',
 height:'100%',
 width:'100%',
 fontSize:'35px',
 marginTop:'135px',
};

const Studentdata = () => {
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
        <div className="App" style={myStyle}><br/>
        <section style={{backgroundImage: 'url(./background.jpg)'}}>
          <input type="text" autoComplete='on'
          name='name' value={inputdata.name} onChange={changehandle}
        placeholder="Enter Name"/>
        <input type="text" autoComplete='on' name='rollNo' value={inputdata.rollNo}onChange={changehandle}
        placeholder="Roll no"/>
       <button onClick={changhandle}>Add It
        </button><br/>
        <div style={{display:'flex'}}>
            
        <img src='https://www.kindpng.com/picc/m/117-1176558_transparent-student-png-student-images-png-hd-png.png' height={500} width={200} style={{marginRight:'25px'}}/>
        
        <table border={1} width="30%" cellPadding={10}>
          <tbody>
            <tr>
              <th>SL.No</th>
              <th>Name</th>
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
        </section></div>
      );

      }

export default Studentdata
