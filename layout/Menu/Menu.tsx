import { useContext } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';
import { firstLevelMenu } from '../../helpers/helpers';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }

          return m;
        }),
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => {
          return (
            <div key={menu.route}>
              <Link href={`/${menu.route}`}>
                <a>
                  <div className={cn(styles.firstLevel, { [styles.firstLevelActive]: menu.id === firstCategory })}>
                    {menu.icon} <span>{menu.name}</span>
                  </div>
                </a>
              </Link>

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
        {menu.map((item) => {
          if (item.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
            item.isOpened = true;
          }

          return (
            <div key={item._id.secondCategory}>
              <div className={styles.secondLevel} onClick={() => openSecondLevel(item._id.secondCategory)}>
                {item._id.secondCategory}
              </div>
              <div className={cn(styles.secondLevelBlock, { [styles.secondLevelBlockOpened]: item.isOpened })}>
                {buildThirdLevel(item.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((elem) => (
      <Link key={`/${route}/${elem.alias}`} href={`/${route}/${elem.alias}`}>
        <a className={cn(styles.thirdLevel, { [styles.thirdLevelOpened]: `/${route}/${elem.alias}` === router.asPath })}>{elem.category}</a>
      </Link>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
