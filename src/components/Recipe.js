import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { RecipeInfo, InfoBlock, Badge, BadgeList } from './Recipe.styled';

export const Recipe = ({ recipe: { name, time, servings, calories, difficulty } }) => {
    return (
       <div>
            <h2>{name}</h2>
            <RecipeInfo>
                <InfoBlock>
                    <BsAlarm />
                    <span>{time}min</span>
                </InfoBlock>
                <InfoBlock>
                    <HiOutlineChartPie />
                    <span>{servings}servings</span> 
                </InfoBlock>
                <InfoBlock>
                    <HiOutlineChartBar />
                    <span>{calories}calories</span>
                </InfoBlock>
            </RecipeInfo>
            
            <h3>Difficulty</h3>
            <BadgeList>
                <Badge>Easy { difficulty === 'easy' && 'active'}</Badge>
                <Badge>Medium { difficulty === 'medium' && 'active'}</Badge>
                <Badge>Hard { difficulty === 'hard' && 'active'}</Badge>
            </BadgeList>
        
            
    </div>
   ) 
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty:PropTypes.oneOf(['easy', 'medium','hard']).isRequired,
  }).isRequired,
};
