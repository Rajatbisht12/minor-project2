const http = require('http');
const express = require('express');
const {readFileSync} = require('fs');
const app = express();

const options = {
    hostname : 'gaziabadi.com',
    port : 1106,
    path: '/',
    method: 'GET'
};

const loadmentorEmail = () =>{
    let users = JSON.parse(readFileSync('data.json'));
    const emailMentor = users.Users.flatMap(user => {
      const mentorEmails = user.mentor ? user.mentor.map(m => m.email) : [];
      return mentorEmails;
    });
    return emailMentor;
}
  
const loadstudentEmail = () =>{
    let users = JSON.parse(readFileSync('data.json'));
    const emailStudent = users.Users.flatMap(user => {
      const studentsEmails = user.students ? user.students.map(s => s.email) : [];
      return studentsEmails;
    });
    return emailStudent;
}
  
const loadadminEmail = () =>{
    let users = JSON.parse(readFileSync('data.json'));
    const emailAdmin = users.Users.flatMap(user => {
      const adminEmails = user.admin ? user.admin.map(a => a.email) : [];
      return adminEmails
    });
    return emailAdmin;
}


const req = http.request(options, (res) =>{

})