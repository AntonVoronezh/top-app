import { Htag } from '../components';
import { Button } from '../components/Button/Button';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag={'h1'}>gggg</Htag>
      <Button appearance={'primary'} arrow='right'> кнопка </Button>
      <Button appearance={'ghost'} arrow='down'> кнопка </Button>
    </div>
  );
}
