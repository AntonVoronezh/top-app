import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ size = 'm', children, className, ...props }: CardProps): JSX.Element => {
  return (
    <p className={cn(styles.p, className, { [styles.s]: size === 's', [styles.m]: size === 'm', [styles.l]: size === 'l' })} {...props}>
      {children}
    </p>
  );
};
