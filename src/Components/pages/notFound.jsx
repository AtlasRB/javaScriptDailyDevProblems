import {Link} from 'react-router-dom';

function NotFound() {
  
  return (
    <div className='font-mono text-5xl text-center'>
      <h1 className='mb-16'>Page not found</h1>
      <Link to='/' className='text-blue-300 hover:underline'>Link back to home page</Link>
    </div>
    
  );
};

export default NotFound