const express = require('express');
const {readFileSync} = require('fs');
const cors = require('cors');
const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));

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


let loadPasswordsM= () => {
  let users = JSON.parse(readFileSync('data.json'));
  const passwordMentor = users.Users.flatMap(user => {
    const mentorPasswords = user.mentor ? user.mentor.map(m => m.password) : [];
    return mentorPasswords;
  });
  return passwordMentor;
}

let loadPasswordsS= () => {
  let users = JSON.parse(readFileSync('data.json'));
  const passwordStudent = users.Users.flatMap(user => {
    const studentsPasswords = user.students ? user.students.map(s => s.password) : [];
    return studentsPasswords;
  });
  return passwordStudent;
}

let loadPasswordsA= () => {
  let users = JSON.parse(readFileSync('data.json'));
  const passwordAdmin = users.Users.flatMap(user => {
    const adminPasswords = user.admin ? user.admin.map(a => a.password) : [];
    return adminPasswords;
  });
  return passwordAdmin;
}






// loadEmails();

const EmailsM = loadmentorEmail();
const EmailsS = loadstudentEmail();
const EmailsA = loadadminEmail();




// loadPassword();
const passwordM = loadPasswordsM();
const passwordS = loadPasswordsS();
const passwordA = loadPasswordsA();

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
  const password = req.query.password;

  if (EmailsM.includes(email) && passwordM.includes(password)) {
    res.redirect("/mentor");
  } else if (EmailsS.includes(email) && passwordS.includes(password)) {
    res.redirect("/student");
  } else if (EmailsA.includes(email) && passwordA.includes(password)) {
    res.redirect("/admin");
  } else {
    res.send("This is the failed if backend");
  }
});

app.get("/mentor", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send("Mentor");
});

app.get("/student", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send("Student");
});

app.get("/admin", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send("Admin");
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