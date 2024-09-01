import { useContext } from 'react';
import { ToasterContext } from '../contexts/ToasterContext';

const Contact = () => {
  const { toast } = useContext(ToasterContext);
  return (
    <main>
      <h1>Contact us</h1>
      <button onClick={() => toast.toast('🍞🍞🍞 TOASTED! 🍞🍞🍞')}>Toast! 🍞</button>
    </main>
  );
};

export default Contact;
