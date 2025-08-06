import { useFormStatus } from 'react-dom';

const SubmitBtn = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`btn ${pending ? 'btn-ghost cursor-not-allowed' : 'btn-primary'}`}
      type='submit'
      disabled={pending}
    >
      {pending ? <span className={`${pending ? 'animate-pulse' : ''}`}>...</span> : children}
    </button>
  );
};

export default SubmitBtn;
