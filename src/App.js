import './App.css';
import Calendar from './components/calendar/Calendar';
import ExpencesContainer from './components/expences/ExpencesContainer';
import ProfileHeader from './components/header/ProfileHeader';
import Day from './components/day/Day';
import { createCSSVariables } from './color.js';

createCSSVariables();


function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <Calendar />
      <Day />
      <ExpencesContainer />
    </div>
  );
}

export default App;
