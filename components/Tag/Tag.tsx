import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 's', children, color = 'ghost', className, href, ...props }: TagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.m]: size === 'm',
        [styles.s]: size === 's',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.grey]: color === 'grey',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}> {children}</a> : <>{children}</>}
    </p>
  );
};
