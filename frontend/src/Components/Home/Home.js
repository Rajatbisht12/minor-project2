// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBIcon } from 'mdbreact';
// import Announcements from '../Sections/Announcement';
// import EventCalender from '../Sections/EventsCalender';
// import './homeStyle.css';
// // import Navbar from '../Navbar/Navbar';

// function Home(props) {
//   const [email, setEmail] = useState(props.userEmail);
//   const [data, setData] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     console.log('email state:', email);
//     description();
//   }, [email]);

//   const description = async (event) => {
//     try {
//       const response = await axios.get(`http://localhost:5050/student/?email=${email}`);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       setError(error);
//     }
//   };

//   return (
//     <>
//     {/* <Navbar/> */}
//       {/* <div className='Image'> <img src={image} alt="My Image Description" /> </div> */}
//       <div className='About'>
//         {Array.isArray(data) && data.length > 0 ? (
//           <div>
//             {data.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         ) : data ? (
//           <h1>{data}</h1>
//         ) : (
//           <p>No data available</p>
//         )}
//         {error && <div>Error: {error.message}</div>}
//       </div>
//       <MDBRow>
        
//         <MDBCol md="12">
//           <MDBCard className="mb-4">
//             <MDBCardHeader>
//             <div className='Announcements'>
//               <MDBIcon icon="volume-up" className="mr-3"/>
//               Latest announcements
//             </div>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <Announcements />
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
        
//       <div className='Event'>
//         <MDBCol md="12">
//           <MDBCard style={{ height: 500 }}>
//           <div className='header'>
//             <MDBCardHeader style={{fontSize: 40}}>
//               <MDBIcon icon="calendar-alt" className="mr-3" />
//               Event Calender
//             </MDBCardHeader>
//           </div>
//             <MDBCardBody>
//               <EventCalender />
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </div>
//       </MDBRow>
//     </>
//   );
// }

// export default Home;


import React, { useState } from 'react'
import Example from '../Navbar/Navbar'

function Home(props) {

  const [email, setEmail] = useState(props.userEmail);
  
  return (
    <>
        <Example email={email}/>
    </>
  )
}

export default Home