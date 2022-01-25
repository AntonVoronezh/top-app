import { useContext } from 'react';

import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
import CoursesItem from './icons/courses.svg'
import BooksItem from './icons/books.svg'
import ProductItem from './icons/product.svg'
import ServicesItem from './icons/services.svg'

const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: }
]


export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((item) => {
          return <li key={item._id.secondCategory}>{item._id.secondCategory}</li>;
        })}
      </ul>
    </div>
  );
};
