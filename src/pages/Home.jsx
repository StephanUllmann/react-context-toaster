import { useContext } from 'react';
import { ToasterContext } from '../contexts/ToasterContext';

const Home = () => {
  const { toast } = useContext(ToasterContext);
  return (
    <main>
      <h1>Home</h1>
      <div className='button-wrapper'>
        <button onClick={() => toast.success('Yippie 🥳')}>Success</button>
        <button onClick={() => toast.error('Darn, that went wrong. 🫤')}>Error</button>
        <button onClick={() => toast.toast("Jup, that's a Toast 🍞")}>Neutral</button>
      </div>
    </main>
  );
};

export default Home;
