import React, { useState } from 'react'
import Example from '../Navbar/Navbar'


function Project(props) {
  const [email, setEmail] = useState(props.userEmail);
  return (
    <>
      <Example email={email}/>
    </>
  )
}

export default Project