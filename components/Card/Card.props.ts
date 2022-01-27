import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  children: ReactNode;
  size?: 's'| 'm' | 'l';
}
