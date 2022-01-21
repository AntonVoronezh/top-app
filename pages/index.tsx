import { useState } from 'react';

import { Htag, P, Rating, Tag } from '../components';
import { Button } from '../components/Button/Button';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Htag tag={'h1'}>gggg</Htag>
      <Button appearance={'primary'} arrow="right">
        кнопка
      </Button>
      <Button appearance={'ghost'} arrow="down">
        кнопка
      </Button>
      <P size="s">Мелкий</P>
      <P size="m">Средний</P>
      <P size="l">Большой</P>

      <Tag size="s">мелк</Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="m" color="green">
        green
      </Tag>
      <Tag color="primary">мелк</Tag>

      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
