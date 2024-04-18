import axios from 'axios';
import React, { useContext } from 'react'
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBRow, MDBIcon
} from 'mdbreact';

import Announcements from '../Sections/Announcement';
import EventCalender from '../Sections/EventsCalender';
import { emailContext } from '../Context/Context';



function Home() {
 const email = useContext(emailContext);

  const description = async (event) =>{
    try{
      const response =  await axios.get(`http://localhost:5050/student/?email=${email}`);
      return response;
    }catch (error) {
      console.error('Error:', error);
    }
  }

  // const image = async (event) =>{
  //   try{
  //     const response =  await axios.get(`http://localhost:5050/studentI/?email=${email}`);
  //     return response;
  //   }catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  return (
    <>
      {/* <div className='Image'>
        <img src={image} alt="My Image Description" />
      </div> */}
      <div className='About'>
        <h1>`${description}`</h1>
      </div>

        <MDBRow>
                <MDBCol md="12">
                    <MDBCard className="mb-4">
                        <MDBCardHeader><MDBIcon icon="volume-up" className="mr-3"/>Latest announcements</MDBCardHeader>
                        <MDBCardBody>
                            <Announcements/>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="12">
                    <MDBCard style={{height: 500}}>
                        <MDBCardHeader><MDBIcon icon="calendar-alt" className="mr-3"/>Event Calender</MDBCardHeader>
                        <MDBCardBody>
                            <EventCalender/>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
          </MDBRow>
    </>
  )
}

export default Home
