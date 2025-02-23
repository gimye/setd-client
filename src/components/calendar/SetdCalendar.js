import styles from './SetdCalendar.module.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

const SetdCalendar = () => {
  const [date, setDate] = useState(new Date());

  const formatDay = (locale, date) => {
   return date.getDate().toString();
 };

 const formatMonthYear = (locale, date) => {
   return `${date.getFullYear()} ${String(date.getMonth() + 1).padStart(2, '0')}`;
 };

  return (
    <div className={styles.calendar_container}>
      <Calendar 
        className={styles.calendar}
        onChange={setDate}
        value={date}
        calendarType={'gregory'}
        formatDay={formatDay}
        formatMonthYear={formatMonthYear}
        formatShortWeekday={(locale, date) => ['S','M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
        prevLabel=""
        nextLabel=""
      />
    </div>
  )
}

export default SetdCalendar;
