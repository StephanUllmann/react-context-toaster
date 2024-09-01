import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

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
      <Outlet />
    </>
  );
};

export default MainLayout;
