import Header from '../Header/Header.tsx';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className={'container'}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
