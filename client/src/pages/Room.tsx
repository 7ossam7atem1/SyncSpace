import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShareScreenButton } from '../components/ShareScreeenButton';
import { ChatButton } from '../components/ChatButton';
import { VideoPlayer } from '../components/VideoPlayer';
import { PeerState } from '../reducers/peerReducer';
import { RoomContext } from '../context/RoomContext';
import { Chat } from '../components/chat/Chat';
import { NameInput } from '../common/Name';
import { ws } from '../ws';
import { UserContext } from '../context/UserContext';
import { ChatContext } from '../context/ChatContext';

export const Room = () => {
  const { id } = useParams();
  const {
    stream,
    screenStream,
    peers,
    shareScreen,
    screenSharingId,
    setRoomId,
  } = useContext(RoomContext);
  const { userName, userId } = useContext(UserContext);
  const { toggleChat, chat } = useContext(ChatContext);

  useEffect(() => {
    if (stream) ws.emit('join-room', { roomId: id, peerId: userId, userName });
  }, [id, userId, stream, userName]);

  useEffect(() => {
    setRoomId(id || '');
  }, [id, setRoomId]);

  const screenSharingVideo =
    screenSharingId === userId ? screenStream : peers[screenSharingId]?.stream;

  const { [screenSharingId]: sharing, ...peersToShow } = peers;

  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <div className='bg-blue-600 p-4 text-white text-center text-lg font-semibold'>
        Room ID: {id}
      </div>
      <div className='flex grow p-4'>
        {screenSharingVideo && (
          <div className='w-4/5 pr-4'>
            <VideoPlayer stream={screenSharingVideo} />
          </div>
        )}
        <div
          className={`grid gap-4 ${
            screenSharingVideo ? 'w-1/5 grid-cols-1' : 'grid-cols-4'
          }`}
        >
          {screenSharingId !== userId && (
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <VideoPlayer stream={stream} />
              <NameInput />
            </div>
          )}

          {Object.values(peersToShow as PeerState)
            .filter((peer) => !!peer.stream)
            .map((peer) => (
              <div
                key={peer.peerId}
                className='bg-white p-4 rounded-lg shadow-md'
              >
                <VideoPlayer stream={peer.stream} />
                <div className='text-center mt-2 font-medium'>
                  {peer.userName}
                </div>
              </div>
            ))}
        </div>
        {chat.isChatOpen && (
          <div className='border-l-2 pb-28'>
            <Chat />
          </div>
        )}
      </div>
      <div className='h-28 fixed bottom-0 p-6 w-full flex items-center justify-center border-t-2 bg-white shadow-lg'>
        <ShareScreenButton onClick={shareScreen} />
        <ChatButton onClick={toggleChat} />
      </div>
    </div>
  );
};
