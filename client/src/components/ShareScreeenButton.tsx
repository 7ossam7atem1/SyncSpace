import { Button } from './common/Button';

export const ShareScreenButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <Button
      className='p-4 mx-2 bg-blue-500 rounded-full hover:bg-blue-700 transition-transform transform-gpu hover:scale-110 text-white'
      onClick={onClick}
      testId='share-screen-button'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 16h8M12 8l4 4-4 4M12 4v8M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z'
        />
      </svg>
    </Button>
  );
};
