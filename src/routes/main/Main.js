import ProfileHeader from "../../components/header/ProfileHeader"
import Calendar from "../../components/calendar/SetdCalendar"
import Day from "../../components/day/Day"
import ExpencesContainer from "../../components/expences/ExpencesContainer"
import styles from "../main/Main.module.css";

const Main = () => {

   return (
      <div className={styles.main}>
         <ProfileHeader />
         <div className={styles.middle}>
            <Calendar />
         <Day />
         </div>
         
         <ExpencesContainer />
      </div>
   )
}

export default Main;