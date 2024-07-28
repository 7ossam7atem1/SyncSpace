import { Join } from '../components/Join'; 

export const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <Join />
      </div>
    </div>
  );
};
