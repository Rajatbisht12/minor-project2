import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fd.css';
import Records from '../../image.json';

const FacultyDetails = () => {
  const [mentors, setMentors] = useState([]);
  const [img, setImage] = useState('');

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('http://localhost:5050/mentorDetails');
        const mentorsData = response.data;
        setMentors(mentorsData);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };
    fetchMentors();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (Array.isArray(Records)) {
        const record = Records.find((record) => record.email === mentors[0]?.email);
        if (record) {
          setImage(record.img);
          localStorage.setItem('userImage', record.img);
        }
      } else {
        console.error('Records is not an array');
      }
    };
    const storedImage = localStorage.getItem('userImage');
    if (storedImage) {
      setImage(storedImage);
    }
    fetchData();
  }, [mentors]);

  const departmentGroups = mentors.reduce((groups, mentor) => {
    const department = mentor.department;
    if (!groups[department]) {
      groups[department] = [];
    }
    groups[department].push(mentor);
    return groups;
  }, {});

  return (
    <div className="container">
      <h1>Faculty Details</h1>
      {Object.keys(departmentGroups).map((department) => (
        <div key={department} className="department-box">
          <h2>{department}</h2>
          {departmentGroups[department].map((mentor) => (
            <div key={mentor.email} className="mentor-card">
              <h3>{mentor.Name}</h3>
              <p>{mentor.description}</p>
              <img src={img} alt={mentor.Name} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FacultyDetails;