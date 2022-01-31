import { SortProps } from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';

export const Sort = ({ size = 'm', children, className, ...props }: SortProps): JSX.Element => {
  return (
    <p className={cn(styles.p, className, { [styles.s]: size === 's', [styles.m]: size === 'm', [styles.l]: size === 'l' })} {...props}>
      {children}
    </p>
  );
};
