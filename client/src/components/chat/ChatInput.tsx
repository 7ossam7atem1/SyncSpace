import { useContext, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { RoomContext } from '../../context/RoomContext';
import { UserContext } from '../../context/UserContext';
import { Button } from '../common/Button';

export const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useContext(ChatContext);
  const { userId } = useContext(UserContext);
  const { roomId } = useContext(RoomContext);

  return (
    <div className='p-2 bg-gray-100 rounded-lg shadow-md'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (message.trim()) {
            sendMessage(message, roomId, userId);
            setMessage('');
          }
        }}
        className='flex items-center space-x-2'
      >
        <textarea
          className='flex-1 border rounded-md p-3 h-12 resize-none shadow-sm focus:outline-none focus:border-blue-400'
          placeholder='Type a message...'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button
          testId='send-msg-button'
          type='submit'
          className='bg-blue-500 p-2 rounded-full text-white transition-transform transform-gpu hover:scale-110'
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
              d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
            />
          </svg>
        </Button>
      </form>
    </div>
  );
};
