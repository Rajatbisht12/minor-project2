import './Announcement.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Announcement() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetchProjects();
    }, []);
  
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5050/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
  return (
    <>
    <div>
      <h1>Announcements</h1>
      <div className="container">
        {projects.length === 0 ? (
          <div className="message">No announcements yet.</div>
        ) : (
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h2>{project.projectName}</h2>
                <p>Role Needed: {project.roleNeeded}</p>
                <p>Number of Students: {project.numStudents}</p>
                <p>Project Details: {project.projectDetail}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  )
}
