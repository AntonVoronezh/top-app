import { Htag, P, Tag } from '../components';
import { Button } from '../components/Button/Button';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag={'h1'}>gggg</Htag>
      <Button appearance={'primary'} arrow='right'> кнопка </Button>
      <Button appearance={'ghost'} arrow='down'> кнопка </Button>
      <P size='s'>Мелкий</P>
      <P size='m'>Средний</P>
      <P size='l'>Большой</P>


      <Tag size='s'>мелк</Tag>
      <Tag size='m' color='red'>red</Tag>
      <Tag size='m' color='green'>green</Tag>
      <Tag color='primary'>мелк</Tag>
    </div>
  );
}
