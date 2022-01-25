import { useContext } from 'react';
import cn from 'classnames';

import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesItem from './icons/courses.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import BooksItem from './icons/books.svg';
import ProductItem from './icons/product.svg';
import ServicesItem from './icons/services.svg';
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesItem />, id: TopLevelCategory.Courses },
  { route: 'books', name: 'Книги', icon: <BooksItem />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductItem />, id: TopLevelCategory.Products },
  { route: 'services', name: 'Сервисы', icon: <ServicesItem />, id: TopLevelCategory.Services },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => {
          return (
            <div key={menu.route}>
              <a href={`/${menu.route}`}>
                <div className={cn(styles.firstLevel, { [styles.firstLevelActive]: menu.id === firstCategory })}>
                  {menu.icon} <span>{menu.name}</span>
                </div>
              </a>
              {menu.id === firstCategory && buildSecondLevel(menu)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
    return (
      <div>
        {menu.map((item) => (
          <div key={item._id.secondCategory}>
            <div className={styles.secondLevel}>{item._id.secondCategory}</div>
            <div className={cn(styles.secondLevelBlock, { [styles.secondLevelBlockOpened]: item.isOpened })}>
              {buildThirdLevel(item.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((elem) => (
      <a href={`/${route}/${elem.alias}`} className={cn(styles.thirdLevel, { [styles.thirdLevelOpened]: true })}>
        {elem.category}
      </a>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
