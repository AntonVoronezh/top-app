import styles from './P.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag } from '../../components';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <>
      <Htag tag='h1'>{page.title}</Htag>
      {products && <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>{products.length}</Tag>}
      <div>{products && products.length}</div>
    </>
  );
};
