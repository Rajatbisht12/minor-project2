import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fd.css';
import Records from '../../image.json';

const FacultyDetails = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
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

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

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

  const filteredMentors = mentors.filter((mentor) => mentor.department === selectedDepartment || selectedDepartment === '');

  return (
    <div>
      <div>
        <label htmlFor="department">Select Department:</label>
        <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
          <option value="">All Departments</option>
          <option value="School of Computer Science">School of Computer Science</option>
          <option value="School of Health Science">School of Health Science</option>
          <option value="School of Business">School of Business</option>
        </select>
      </div>
      <div>
        {filteredMentors.map((mentor) => (
          <div key={mentor.email}>
            <h3>{mentor.Name}</h3>
            <p>{mentor.description}</p>
            <img src={img} alt={mentor.Name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyDetails;