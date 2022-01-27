import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import CoursesItem from './icons/courses.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import BooksItem from './icons/books.svg';
import ProductItem from './icons/product.svg';
import ServicesItem from './icons/services.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesItem />, id: TopLevelCategory.Courses },
  { route: 'books', name: 'Книги', icon: <BooksItem />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductItem />, id: TopLevelCategory.Products },
  { route: 'services', name: 'Сервисы', icon: <ServicesItem />, id: TopLevelCategory.Services },
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
