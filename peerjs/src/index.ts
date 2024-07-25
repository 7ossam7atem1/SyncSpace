import { PeerServer } from 'peer';

PeerServer({ port: 9001, path: '/' });
console.log(`Peer Server running on port ${9001}`);
