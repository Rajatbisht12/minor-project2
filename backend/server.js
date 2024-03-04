const express = require('express');
const {readFileSync} = require('fs');
const app = express();


// let loadEmails = () => {
//   let users = JSON.parse(readFileSync('data.json'));
//   const emails = users.Users.flatMap(user => {
//     const mentorEmails = user.mentor ? user.mentor.map(m => m.email) : [];
//     // const studentsEmails = user.students ? user.students.map(s => s.email) : [];
//     // const adminEmails = user.admin ? user.admin.map(a => a.email) : [];
//     // return mentorEmails.concat(studentsEmails, adminEmails);
//     return mentorEmails;
//   });
  
//   console.log(emails);
//   return emails;
// }

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





// loadEmails();

const EmailsM = loadmentorEmail();
const EmailsS = loadstudentEmail();
const EmailsA = loadadminEmail();

// app.get("/", (req, res) => {
//   const email = req.query.email;
//   if(EmailsM.includes(email)){
//     res.setHeader('Content-Type', 'text/html');
//     app.get("/mentor", (req, res) =>{
//       res.send("This is Mentor mail");
//     })
//   }
//   else if(EmailsS.includes(email)){
//     res.setHeader('Content-Type', 'text/html');
//     app.get("/student", (req, res) =>{
//       res.send("This is Student mail");
//     })
//   }
//   else if(EmailsA.includes(email)){
//     res.setHeader('Content-Type', 'text/html');
//     app.get("/admin", (req, res) =>{
//       res.send("This is Admin mail");
//     })
//   }
//   else{
//     res.send("This is the failed if backend");
//   }
// })


app.get("/", (req, res) => {
  const email = req.query.email;

  if (EmailsM.includes(email)) {
    res.redirect("/mentor");
  } else if (EmailsS.includes(email)) {
    res.redirect("/student");
  } else if (EmailsA.includes(email)) {
    res.redirect("/admin");
  } else {
    res.send("This is the failed if backend");
  }
});

app.get("/mentor", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send("This is Mentor mail");
});

app.get("/student", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send("This is Student mail");
});

app.get("/admin", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send("This is Admin mail");
});



// app.get("/admin", (req, res) => {
//   const email = req.query.email;
//   if(Emails.includes(email)){
//     res.setHeader('Content-Type', 'text/html');
//     res.send("This is the backend");
//   }
//   res.send("This is the failed if backend");
// })

app.get("/email", (req, res) =>{
  res.json(loadEmails());
})

app.get("/password", (req, res) =>{
  res.json(loadPasswords());
})
app.listen(5050, () => {
  console.log("Server is up")
})