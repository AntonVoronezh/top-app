import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary';
  size?: 'm' | 'l';
  href?: string;
}
