import { NameInput } from '../common/Name';
import { Button } from './common/Button';
import { ws } from '../ws';

export const Join: React.FC = () => {
  const createRoom = () => {
    ws.emit('create-room');
  };

  return (
    <div className='flex flex-col items-center justify-center space-y-4 p-4'>
      <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
         Start a new  Meeting
      </h2>
      <NameInput />
      <Button
        onClick={createRoom}
        className='py-2 px-8 text-xl bg-green-500 hover:bg-green-700 transition-colors rounded-md'
      >
        Start new meeting
      </Button>
    </div>
  );
};
