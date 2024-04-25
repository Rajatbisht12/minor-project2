import React, { useState } from 'react'
import EventCalender from '../Sections/EventsCalender';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon } from 'mdbreact';
import Example from '../Navbar/Navbar';

function Calendar(props) {
  const [email, setEmail] = useState(props.userEmail);
  
  return (
    <>
    <Example email={email}/>
    <div className='Event'>
         <MDBCol md="12">
           <MDBCard style={{ height: 500, marginTop:30 }}>
             <MDBCardBody>
               <EventCalender />
             </MDBCardBody>
           </MDBCard>
        </MDBCol>
    </div>
    </>
  )
}

export default Calendar