import {Link} from 'react-router-dom';

function NotAttempted() {
  
  return (
    <div className='font-mono lg:text-5xl text-2xl text-center mx-[5%]'>
      <h1 className='mb-16'>Code Problem not yet attempted</h1>
      <h2 className='mb-16'>Check back later to see my solutions!</h2>
      <Link to='/' className='text-blue-300 hover:underline'>Link back to home page</Link>
    </div>
    
  );
};

export default NotAttempted