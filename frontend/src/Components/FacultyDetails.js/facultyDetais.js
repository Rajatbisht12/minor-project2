import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fd.css'

const HeroSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('/your-server-endpoint');
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

  const filteredMentors = mentors.filter((mentor) =>
    mentor.department === selectedDepartment
  );

  return (
    <div>
      <div>
        <label htmlFor="department">Select Department:</label>
        <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
          <option value="">All Departments</option>
          <option value="department1">Department 1</option>
          <option value="department2">Department 2</option>
          {/* Add more department options as needed */}
        </select>
      </div>
      <div>
        {filteredMentors.map((mentor) => (
          <div key={mentor.email}>
            <h3>{mentor.Name}</h3>
            <p>{mentor.description}</p>
            <img src={mentor.img} alt={mentor.Name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;