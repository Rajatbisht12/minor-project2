const fs = require('fs');
const readFileSync = fs.readFileSync;
const app = require('express')();
const port = 5050;

const loadmentorEmail = () => {
  let users = JSON.parse(readFileSync('data.json'));
  const emailM = users.Users.flatMap(user => {
    const mentorEmails = user.mentors ? user.mentors.map(m => m.email) : [];
    return mentorEmails;
  });
  return emailM;
}

const loadstudentEmail = () => {
  let users = JSON.parse(readFileSync('data.json'));
  const emailS = users.Users.flatMap(user => {
    const studentEmails = user.students ? user.students.map(s => s.email) : [];
    return studentEmails;
  });
  return emailS;
}

const loadadminEmail = () => {
  let users = JSON.parse(readFileSync('data.json'));
  const emailA = users.Users.flatMap(user => {
    const adminEmails = user.admin ? user.admin.map(a => a.email) : [];
    return adminEmails;
  });
  return emailA;
}

const loadPasswordsM = () => {
  let users = JSON.parse(readFileSync('data.json'));
  const passwordMentor = users.Users.flatMap(user => {
    const mentorPasswords = user.mentors ? user.mentors.map(m => m.password) : [];
    return mentorPasswords;
  });
  return passwordMentor;
}

const loadPasswordsS = () => {
  let users = JSON.parse(readFileSync('data.json'));
  const passwordStudent = users.Users.flatMap(user => {
    const studentPasswords = user.students ? user.students.map(s => s.password) : [];
    return studentPasswords;
  });
  return passwordStudent;
}

const loadPasswordsA = () => {
  let users = JSON.parse(readFileSync('data.json'));
  const passwordAdmin = users.Users.flatMap(user => {
    const adminPasswords = user.admin ? user.admin.map(a => a.password) : [];
    return adminPasswords;
  });
  return passwordAdmin;
}

const loadStudentDescription = (email) => {
  let users = JSON.parse(readFileSync('data.json'));
  const studentDesc = users.Users.flatMap(user => {
    if (user.students) {
      const student = user.students.find(s => s.email === email);
      if (student) {
        return student.description;
      }
    }
    return [];
  });
  return studentDesc;
}

app.get("/", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  if (EmailsM.includes(email) && passwordM.includes(password)) {
    res.redirect("/mentor");
  } else if (EmailsS.includes(email) && passwordS.includes(password)) {
    const desc = loadStudentDescription(email);
    res.redirect("/student?desc=" + desc);
  } else if (EmailsA.includes(email) && passwordA.includes(password)) {
    res.redirect("/admin");
  } else {
    res.send("This is the failed if backend");
  }
});