
import recipes from 'recipes.json';
import { RecipeList } from './RecipeList';
import { Container } from './App.styled'


export const App = () => {
  return (
    <Container>
      <RecipeList recipes = {recipes} />
    </Container>
  );
};
