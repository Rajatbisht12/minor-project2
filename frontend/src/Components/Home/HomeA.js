import axios from 'axios';
import React from 'react'



function HomeA ({userEmail}){
 const email = {userEmail};
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
