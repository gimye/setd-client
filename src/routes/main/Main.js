import ProfileHeader from "../../components/header/ProfileHeader"
import Calendar from "../../components/calendar/Calendar"
import Day from "../../components/day/Day"
import ExpencesContainer from "../../components/expences/ExpencesContainer"

const Main = () => {

   return (
      <div>
         <ProfileHeader />
         <Calendar />
         <Day />
         <ExpencesContainer />
      </div>
   )
}

export default Main;