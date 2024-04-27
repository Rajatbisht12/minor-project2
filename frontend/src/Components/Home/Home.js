import React, { useState } from 'react'
import Example from '../Navbar/Navbar'
import Announcement from '../Sections/Announcement';
import FacultyDetais from '../facultyDetails/facultyDetias';


function Home(props) {

  const [email, setEmail] = useState(props.userEmail);
  
  return (
    <>
        <Example email={email}/>
        <Announcement/>
        <FacultyDetais/>
    </>
  )
}

export default Home