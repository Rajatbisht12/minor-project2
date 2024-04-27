import React from 'react';



const genTimeBlock = (day, hour, minute = 0) => {
  const days = {
    MON: 0,
    TUE: 1,
    WED: 2,
    THU: 3,
    FRI: 4,
    // Add more days if needed
  };

  const date = new Date();
  date.setHours(hour);
  date.setMinutes(minute);
  date.setDate(date.getDate() + days[day] - date.getDay());

  return date;
};


const events_data = [
  {
    title: "System Provisioning and Config.",
    startTime: genTimeBlock("MON", 10),
    endTime: genTimeBlock("MON", 10, 50),
    location: "Classroom 11112",
    extra_descriptions: ["Hitesh"],
  },
  {
    title: "Applied Devops",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 11, 50),
    location: "Classroom 11114",
    extra_descriptions: ["Mitali", "chugh"],
  },
  {
    title: "Test Automation Lab",
    startTime: genTimeBlock("MON", 13),
    endTime: genTimeBlock("MON", 14, 50),
    location: "Classroom 10004",
    extra_descriptions: ["Divya", "Rose"],
  },
  {
    title: "Applied Devops",
    startTime: genTimeBlock("TUE", 13),
    endTime: genTimeBlock("TUE", 13, 50),
    location: "Classroom 11112",
    extra_descriptions: ["Mitali", "chugh"],
  },
  {
    title: "System Monitoring",
    startTime: genTimeBlock("TUE", 14),
    endTime: genTimeBlock("TUE", 14, 50),
    location: "Classroom 11112",
    extra_descriptions: ["Mitali", "chugh"],
  },
  {
    title: "System Monitoring Lab",
    startTime: genTimeBlock("WED", 13),
    endTime: genTimeBlock("WED", 14, 50),
    location: "Classroom 9208",
    extra_descriptions: ["Hitesh"],
  },
  {
    title: "System Monitoring",
    startTime: genTimeBlock("THU", 13),
    endTime: genTimeBlock("THU", 13, 50),
    location: "Classroom 11112",
    extra_descriptions: ["Hitesh"],
  },
  {
    title: "Test Automation",
    startTime: genTimeBlock("THU", 14),
    endTime: genTimeBlock("THU", 14, 50),
    location: "Classroom 11112",
    extra_descriptions: ["Alind"],
  },
  {
    title: "System Provisioning and Config.",
    startTime: genTimeBlock("FRI", 10),
    endTime: genTimeBlock("FRI", 10, 50),
    location: "Classroom 11112",
    extra_descriptions: ["Hitesh"],
  },
  {
    title: "EDGE",
    startTime: genTimeBlock("FRI", 11),
    endTime: genTimeBlock("FRI", 11, 50),
    location: "Classroom 11112",
    extra_descriptions: ["Sumit"],
  },
  {
    title: "Test Automation",
    startTime: genTimeBlock("FRI", 12),
    endTime: genTimeBlock("FRI", 12, 50),
    location: "Classroom 11112",
    extra_descriptions: ["Alind"],
  },
];


const EventsCalender = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const times = Array.from({ length: 9 }, (_, i) => `${9 + i}:00`);

  const handleEventClick = (event) => {
    alert(`Event: ${event.title}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '100px', backgroundColor: 'lightgray' }}></div>
        {days.map((day) => (
          <div key={day} style={{ width: '200px', backgroundColor: 'lightgray', textAlign: 'center' }}>
            {day}
          </div>
        ))}
      </div>
      {times.map((time) => (
        <div key={time} style={{ display: 'flex' }}>
          <div style={{ width: '100px', backgroundColor: 'lightgray', textAlign: 'center' }}>{time}</div>
          {days.map((day) => (
            <div key={`${day}-${time}`} style={{ width: '200px', height: '100px', border: '1px solid black' }}>
              {events_data
                .filter((event) => event.startTime.getDay() === days.indexOf(day) && event.startTime.getHours() === parseInt(time.split(':')[0]))
                .map((event) => (
                  <div
                    key={`${event.title}-${event.startTime.getHours()}-${event.startTime.getMinutes()}`}
                    style={{ backgroundColor: 'lightgreen', padding: '5px', cursor: 'pointer' }}
                    onClick={() => handleEventClick(event)}
                  >
                    {event.title}
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventsCalender;