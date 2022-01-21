import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';

export const Sidebar = ({ children, ...props }: SidebarProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
