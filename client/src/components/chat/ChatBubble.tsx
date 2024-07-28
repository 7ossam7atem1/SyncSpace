import { useContext } from 'react';
import { RoomContext } from '../../context/RoomContext';
import { IMessage } from '../../types/chat';
import classNames from 'classnames';
import { UserContext } from '../../context/UserContext';

export const ChatBubble: React.FC<{ message: IMessage }> = ({ message }) => {
  const { peers } = useContext(RoomContext);
  const { userId } = useContext(UserContext);

  // Safely access peer data
  const peer = peers[message.author as keyof typeof peers];
  const author = peer ? peer.userName : 'Anonymous';
  const userName = author || 'Anonymous';
  const isSelf = message.author === userId;
  const time = new Date(message.timestamp).toLocaleTimeString();

  return (
    <div
      className={classNames('m-2 flex animate-slideIn', {
        'pl-10 justify-end': isSelf,
        'pr-10 justify-start': !isSelf,
      })}
    >
      <div className='flex flex-col max-w-xs'>
        <div
          className={classNames(
            'inline-block py-2 px-4 rounded-lg shadow-md transition-transform transform-gpu hover:scale-105',
            {
              'bg-blue-200 text-blue-900': isSelf,
              'bg-gray-200 text-gray-900': !isSelf,
            }
          )}
        >
          {message.content}
          <div
            className={classNames('text-xs opacity-70 mt-1', {
              'text-right': isSelf,
              'text-left': !isSelf,
            })}
          >
            {time}
          </div>
        </div>
        <div
          className={classNames('text-sm mt-1 font-semibold', {
            'text-right': isSelf,
            'text-left': !isSelf,
          })}
        >
          {isSelf ? 'You' : userName}
        </div>
      </div>
    </div>
  );
};
