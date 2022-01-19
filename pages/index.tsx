import { Htag } from '../components';
import { Button } from '../components/Button/Button';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag={'h1'}>gggg</Htag>
      <Button appearance={'primary'}> кнопка </Button>
      <Button appearance={'ghost'}> кнопка </Button>
    </div>
  );
}
