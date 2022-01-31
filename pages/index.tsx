import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

import { Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { Button } from '../components/Button/Button';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
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
      <Input placeholder='yyyyyy'/>
      <Textarea placeholder='yyyyyy'/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
