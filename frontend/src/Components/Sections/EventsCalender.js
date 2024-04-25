import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss'; 

const EventsCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 12.5,
      title: 'Final Exams - SEM 1',
      start: new Date(2019, 5, 6, 19, 30, 0),
      end: new Date(2019, 5, 6, 23, 30, 0),
    },
    {
      id: 13,
      title: 'First Day - SEM 2',
      start: new Date(2019, 6, 1, 8, 30, 0),
      end: new Date(2019, 6, 1, 5, 30, 0),
    },
    {
      id: 14,
      title: 'AF Viva',
      start: moment().subtract(3, 'hours').toDate(), 
      end: moment().add(3, 'hours').toDate(), 
    },
  ]);

  
  const handleEventUpdate = (updatedEvents) => {
    setEvents(updatedEvents);
  };

  return (
    <Calendar
      localizer={momentLocalizer(moment)}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  );
};

export default EventsCalendar;
