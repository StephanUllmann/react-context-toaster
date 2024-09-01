import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ToasterProvider from '../contexts/ToasterContext';

const MainLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'contact'}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* <ToasterProvider styles={{ error: { color: 'red' }, success: { color: 'limegreen' } }}> */}
      <ToasterProvider>
        <Outlet />
      </ToasterProvider>
      <footer>
        <h2>This is a footer™️</h2>
      </footer>
    </>
  );
};

export default MainLayout;
