import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <p>Page not found</p>
      <Link to='/'>Home</Link>
    </main>
  );
};

export default NotFound;
