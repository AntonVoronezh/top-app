import { motion } from 'framer-motion';
import cn from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance, children, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={cn(styles.button, className, { [styles.primary]: appearance === 'primary', [styles.ghost]: appearance === 'ghost' })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, { [styles.down]: arrow === 'down' })}>
          <ArrowIcon />
        </span>
      )}
    </motion.button>
  );
};
