import React, { useState } from 'react'
import ExampleM from '../Navbar/NavbarM'
import axios from 'axios';
import './homeM.css'


function HomeM(props) {
  const [email, setEmail] = useState(props.userEmail);
  const [projectName, setProjectName] = useState('');
  const [roleNeeded, setRoleNeeded] = useState('');
  const [numStudents, setNumStudents] = useState('');
  const [projectDetail, setProjectDetail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/projects', {
        projectName,
        roleNeeded,
        numStudents,
        projectDetail,
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      } );
      console.log(response.data);
      // Reset form fields after successful submission
      setProjectName('');
      setRoleNeeded('');
      setNumStudents('');
      setProjectDetail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ExampleM email={email}/>
      <div className="form">
      <form onSubmit={handleSubmit}>
         <label>
          Project Name:
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Role Needed:
          <input
            type="text"
            value={roleNeeded}
            onChange={(e) => setRoleNeeded(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number of Students:
          <input
            type="number"
            value={numStudents}
            onChange={(e) => setNumStudents(e.target.value)}
          />
        </label>
        <br />
        <label>
          Project Detail:
          <textarea
            value={projectDetail}
            onChange={(e) => setProjectDetail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  )
}

export default HomeM