import styles from './ExpencesContainer.module.css';
import Expenditure from './Expenditure';
import Income from './Income';

const ExpencesContainer = () => {

   return (
      <div>
         <Expenditure />
         <Income />
      </div>
   )
}

export default ExpencesContainer;