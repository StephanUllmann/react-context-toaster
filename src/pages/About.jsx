import { useContext } from 'react';
import { ToasterContext } from '../contexts/ToasterContext';

const About = () => {
  const { toast } = useContext(ToasterContext);
  return (
    <main>
      <h1>About</h1>
      <button onClick={() => toast.toast('Toast from about!')}>Toast here!</button>
    </main>
  );
};

export default About;
