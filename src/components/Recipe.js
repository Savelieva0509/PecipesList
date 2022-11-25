import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
import PropTypes from 'prop-types';


export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
    return (
       <div>
        <h2>{name}</h2>
            <div>
                <div><BsAlarm/>{time}min</div>
                <div><HiOutlineChartPie/>{servings}servings</div>
                <div><HiOutlineChartBar/>{calories}calories</div>
            </div>
            <div>
                <h3>Difficulty</h3>
                <span>Easy</span>
                <span>Medium</span>
                <span>Hard</span>
            </div>
        
            
    </div>
   ) 
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};
