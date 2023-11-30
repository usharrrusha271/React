/*import React, { useState } from 'react';
const student = {
  name: 'John Doe',
  rollNumber: '12345',
  college: 'ABC College',
  department: 'Computer Science',
  year: '2nd',
  marks: {
    math: 90,
    science: 85,
    english: 80,
  },
};

console.log(student); 

function App() {
  const [collegeInfo, setCollegeInfo] = useState(null);
  const [rollNumber, setRollNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.example.com/college-info/${rollNumber}`);
    const data = await response.json();
    setCollegeInfo(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Roll Number:
          <input type="text" value={rollNumber} onChange={(event) => setRollNumber(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {collegeInfo && (
        <div>
          <h2>College Information</h2>
          <p>Name: {collegeInfo.name}</p>
          <p>Address: {collegeInfo.address}</p>
          <p>Phone: {collegeInfo.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Student*/
/*import React,{useEffect,useState}from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'
import Loading from '../Components/Loading.js'
function Student() {
  const [loading,setLoading]=useState(true);
  const [students,setStudents]=useState([]);
  useEffect(() =>{
    axios.get(`http://localhost:8000/api/students`).then(res => {
      console.log(res)
      setStudents(res.data.students);
      setLoading(false);
   });
  }, [])
  if(Loading){
    return (
      <Loading/>
    
    )
  }
  var studentDetails=students.map( (item.index) = > {
    return(...
      )
  )};
  return(
    <div className="container mt-5">
    <div className="row">
    <div className="col-md-12">
      <div className="card">
      <div className="card-header">
        <h4>Students List<Link to="/students/create"className="btn btn-primary flot-end">
          Add Student
          </Link>
          </h4>
        </div>
      <div className="card-body">
      <table className="table table-striped" />
      <thead> 
        <tr>
          <th>ID</th>
          </tr>
        </div>
        </div>
        </div>
        </div>
        </thead>
        )
}
}
}*/
const Student =[
  {
    id:"1",
    Name:"Usha",
    Branch:"ECE",
  },

{
    id:"2",
    Name:"Ashwini",
    Branch:"ECE",
  },
  {
    id:"3",
    Name:"Monika",
    Branch:"ECE",
  },
  {
    id:"4",
    Name:"Sangeeta",
    Branch:"ECE",
  },
  {
    id:"5",
    Name:"Meghana",
    Branch:"ECE",
  },
]
 export default Student; 


    

  



