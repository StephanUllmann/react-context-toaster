import { useContext } from 'react';
import SubmitBtn from '../components/SubmitBtn.jsx';
import { ToasterContext } from '../contexts/ToasterContext';

const Contact = () => {
  const { toast } = useContext(ToasterContext);
  const action = async (formData) => {
    const name = formData.get('title');
    const body = JSON.stringify(Object.fromEntries(formData));
    try {
      const res = await fetch(`${'http://localhost:8912'}/posting`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      console.log({ res });
      if (!res.ok) throw new Error('Failed to post');
      const data = await res.json();
      console.log({ data });
      toast.success(`Thanks for your message, ${name}!`);
    } catch (error) {
      console.log(error);
      toast.error(`Sorry, ${name}! Please try again`);
    }
  };
  return (
    <main>
      <h1>Contact us</h1>
      <div>
        <form action={action} className='contact-form'>
          <fieldset className='fieldset max-w-fit mx-auto'>
            <label htmlFor='title' className='sr-only'>
              Title
            </label>
            <input type='text' placeholder='Name' className='input input-md' id='title' name='title' />
            <label htmlFor='Content' className='sr-only'>
              Content of your post
            </label>
            <textarea className='textarea h-24' placeholder='Your message' id='content' name='content'></textarea>
            <SubmitBtn>Submit</SubmitBtn>
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default Contact;
