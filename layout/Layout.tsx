import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
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
