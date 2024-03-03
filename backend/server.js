const express = require('express');
const {readFileSync} = require('fs');
const app = express();


let loadEmails = () => {
  let users = JSON.parse(readFileSync('data.json'));
  const emails = users.Users.flatMap(user => {
    const mentorEmails = user.mentor ? user.mentor.map(m => m.email) : [];
    const studentsEmails = user.students ? user.students.map(s => s.email) : [];
    const adminEmails = user.admin ? user.admin.map(a => a.email) : [];
    return mentorEmails.concat(studentsEmails, adminEmails);
  });
  
  // console.log(emails);
  return emails;
}

let loadPasswords= () => {
  let users = JSON.parse(readFileSync('data.json'));
  const password = users.Users.flatMap(user => {
    const mentorPasswords = user.mentor ? user.mentor.map(m => m.password) : [];
    const studentsPasswords = user.students ? user.students.map(s => s.password) : [];
    const adminPasswords = user.admin ? user.admin.map(a => a.password) : [];
    return mentorPasswords.concat(studentsPasswords, adminPasswords);
  });
  console.log(password);
  return password;
}

loadEmails();

const Emails = loadEmails();

app.get("/", (req, res) => {
  const email = req.query.email;
  if(Emails.includes(email)){
    res.send("This is the backend");
  }
  res.send("This is the failed if backend");
})

app.get("/email", (req, res) =>{
  res.json(loadEmails());
})

app.get("/password", (req, res) =>{
  res.json(loadPasswords());
})
app.listen(5050, () => {
  console.log("Server is up")
})