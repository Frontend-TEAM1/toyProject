import BasicFooter from './Footer/footer';
import BasicHeader from './Header/header';

const { Outlet } = require('react-router-dom');

function Layout() {
  return (
    <>
      <BasicHeader />
      <Outlet />
      <BasicFooter />
    </>
  );
}

export default Layout;
