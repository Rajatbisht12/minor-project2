import axios from 'axios';
import React, { useState } from 'react'

function HomeA (props){
  const [email, setEmail] = useState('');
  setEmail(props.email);
  const loadDesc = async () =>{
    const desc = await axios.get(`http://localhost:5050/student/?email=${email}`);
    return desc;
  }
  return (
    <>
      
    </>
  )
}

export default HomeA
