import { useContext, useEffect } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { IMessage } from '../../types/chat';
import { ChatBubble } from './ChatBubble';
import { ChatInput } from './ChatInput';

export const Chat: React.FC = () => {
  const { chat } = useContext(ChatContext);

  useEffect(() => {
    console.log('Chat component rendered');
    console.log('Current messages:', chat.messages);
  }, [chat]);

  return (
    <div
      className='flex flex-col h-full justify-between bg-gray-100 p-4 rounded-lg shadow-lg'
      data-testid='chat'
    >
      <div className='overflow-y-auto'>
        {chat.messages.map((message: IMessage) => (
          <ChatBubble
            message={message}
            key={message.timestamp + (message?.author || 'anonymous')}
          />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
