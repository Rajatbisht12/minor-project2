const express = require('express');
const { readFileSync, writeFileSync } = require('fs');
const fs = require('fs')
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

// const allowedOrigins = ['exp://192.168.1.11:8081', 'http://localhost:8081'];
// app.use(cors({
//   origin: allowedOrigins
// }));

const userData = JSON.parse(readFileSync('data.json'));
// const writeData = JSON.parse(writeFileSync('data.json'));



const loadMentorEmails = () => {
  return userData.Users.flatMap(user => (user.mentor ?? []).map(m => m.email));
};

const loadStudentEmails = () => {
  return userData.Users.flatMap(user => (user.students ?? []).map(s => s.email));
};

const loadAdminEmails = () => {
  return userData.Users.flatMap(user => (user.admin ?? []).map(a => a.email));
};

const loadMentorPasswords = () => {
  return userData.Users.flatMap(user => (user.mentor ?? []).map(m => m.password));
};

const loadStudentPasswords = () => {
  return userData.Users.flatMap(user => (user.students ?? []).map(s => s.password));
};

const loadAdminPasswords = () => {
  return userData.Users.flatMap(user => (user.admin ?? []).map(a => a.password));
};

const loadUserDescriptionAndImage = (email, userType) => {
  const users = userData.Users.filter(user => {
    return user[userType] && user[userType].some(userRole => userRole.email === email);
  });

  if(users.length > 0) {
    const user = users[0];try {
      const data = fs.readFileSync('projects.json', 'utf8');
      projects = JSON.parse(data);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error('Error reading projects.json:', err);
      }
    }
    const userRole = user[userType].find(userRole => userRole.email === email);
    return {
      description: userRole.description,
      img: userRole.img,
    };
  }

  return {
    description: '',
    img: '',
  };
};

const loadMentorDescription = (email) => {
  const user = userData.Users.find(user => user.mentor.some(m => m.email === email));
  if (user) {
    const mentor = user.mentor.find(m => m.email === email);
    return { description: mentor.description, img: mentor.img };
  }
  return { description: '', img: '' };
};

const loadStudentDescription = (email) => {
  return loadUserDescriptionAndImage(email, 'students');
};

const loadAdminDescription = (email) => {
  return loadUserDescriptionAndImage(email, 'admin');
};

const loadMentorList = () => {
  return userData.Users.flatMap(user => (user.mentor ?? []).map(m => m.Name));
};

const loadStudentList = () => {
  return userData.Users.flatMap(user => (user.students ?? []).map(m => m.email));
};

const emailsM = loadMentorEmails();
const emailsS = loadStudentEmails();
const emailsA = loadAdminEmails();

const passwordM = loadMentorPasswords();
const passwordS = loadStudentPasswords();
const passwordA = loadAdminPasswords();

app.get("/", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  if (emailsM.includes(email) && passwordM.includes(password)) {
    res.send("Mentor");
    res.redirect("/mentor");
  } else if (emailsS.includes(email) && passwordS.includes(password)) {
    res.send("Student");
    res.redirect("/student");
  } else if (emailsA.includes(email) && passwordA.includes(password)) {
    res.send("Admin");
    res.redirect("/admin");
  } else {
    res.send("This is the failed if backend");
  }
});

app.get("/mentor", (req, res) => {
  const email = req.query.email;
  const { description, img } = loadMentorDescription(email);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ description, img }));
});

app.get("/student", (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  try {
    const studentData = loadStudentData(email);

    if (studentData) {
      const studentWithDetails = {
        name: studentData.name,
        email: studentData.email,
        img: studentData.img,
        description: studentData.description,
        availableForProject: true, // Assuming all students are available for projects
      };
      res.json(studentWithDetails);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});
app.get("/admin", (req, res) => {
  const email = req.query.email;
  const { description, img } = loadAdminDescription(email);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ description, img }));
});

const facultyList = loadMentorList();
app.get('/facultyList', (req, res) => {
  const searchTerm = req.query.searchTerm || ''; // Corrected the parameter name
  const mentorName = searchTerm.trim().toLowerCase(); // Trim any leading/trailing whitespace and convert to lowercase

  console.log("Search Term:", mentorName);

  // Find the mentor with the matching name
  const mentor = userData.Users.flatMap(user => user.mentor || []).find(m => {
    console.log("Mentor Name:", m.Name.toLowerCase());
    return m.Name.toLowerCase() === mentorName;
  });

  console.log("Found Mentor:", mentor);

  if (mentor) {
    const facultyWithDetails = {
      name: mentor.Name,
      email: mentor.email,
      img: mentor.img,
      description: mentor.description,
      availableForProject: true // Assumingall faculty members are available for projects
    };
    res.send(facultyWithDetails);
  } else {
    res.status(404).send("Mentor not found"); // Sending a 404 status with an appropriate message
  }
});

app.get('/projects', (req, res) => {
  fs.readFile('projects.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading projects.json:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const projects = JSON.parse(data);
    res.json(projects);
  });
});


app.post('/projects', (req, res) => {
  const { projectName, roleNeeded, numStudents, projectDetail } = req.body;
  const project = { projectName, roleNeeded, numStudents, projectDetail };

  // Read the existing projects from the file
  let projects = [];
  try {
    const data = readFileSync('projects.json', 'utf8');
    projects = JSON.parse(data);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Error reading projects.json:', err);
    }
  }

  // Add the new project to the existing array
  projects.push(project);

  // Write the updated projects array to the file
  writeFileSync('projects.json', JSON.stringify(projects, null, 2));

  res.status(201).json(project);
});

const studentList = loadStudentList();
app.get('/studentDetails', (req, res) => {
  const email = req.query.email // Trim any leading/trailing whitespace and convert to lowercase


  // Find the mentor with the matching name
  const student = userData.Users.flatMap(user => user.students || []).find(m => {
    return m.email === email;
  });

  console.log("Found Student:", student);

  if (student) {
    const studentWithDetails = {
      name: student.Name,
      email: student.email,
      img: student.img,
      description: student.description,
      availableForProject: true // Assumingall faculty members are available for projects
    };
    res.send(studentWithDetails);
  } else {
    res.status(404).send("Mentor not found"); // Sending a 404 status with an appropriate message
  }
});

app.listen(5050, () => {
  console.log("Server is up");
});