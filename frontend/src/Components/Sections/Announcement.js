import {Component} from "react";
import React from "react";
import {MDBCard, MDBCardBody, MDBCardHeader} from "mdbreact";

export default class Announcements extends Component {
    render() {
        return <>
            <MDBCard className="mb-4">
                <MDBCardHeader>Student End-Sem Examinantion</MDBCardHeader>
                <MDBCardBody>
                    <ul>
                        <li style={{padding: 10}}>End-Sem Examinantion for all the Year are starting from <span
                            style={{color: "#FF0000", fontWeight: "bolder"}}><u> 28th April</u></span>. until the end of
                            15th May.
                        </li>
                        <li style={{padding: 10}}>Students are <u>strictly</u> advised to Fill there feedback form and pay all there 
                        dues to get their Admint cards.
                        </li>
                        <li style={{padding: 10}}>The Attendance lesser than <b>75%</b> will not be accepted.
                        </li>
                    </ul>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
                <MDBCardHeader>Minor presentation dates are Out for Minor II and Major II</MDBCardHeader>
                <MDBCardBody>
                    <p>
                        The presentation dates for Minor && MAjor are from <u style={{color: "#FF0000", fontWeight: "bolder"}}>24 Apr to 30 Apr</u>.
                    </p>
                </MDBCardBody>
            </MDBCard>
        </>
    }
}