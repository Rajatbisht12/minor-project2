import axios from 'axios';
import React, { useContext } from 'react'
import { emailContext } from '../Context/Context';


function HomeA (){
 const email = useContext(emailContext);
  const loadDesc = async () =>{
    const desc = await axios.get(`http://localhost:5050/student/?email=${email}`);
    return desc;
  }
  return (
    <>
      <div className='Desc'>
        {loadDesc}
      </div>
    </>
  )
}

export default HomeA
