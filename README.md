# SyncSpace

<div align="center">

![SyncSpace Logo](client/src/logo.svg)

**A modern, real-time video conferencing and collaboration platform built with WebRTC**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white)](https://webrtc.org/)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Docker Deployment](#docker-deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 🎯 Overview

SyncSpace is a full-featured video conferencing application that enables users to create virtual rooms for real-time video communication, screen sharing, and text chat. Built with modern web technologies, it provides a seamless peer-to-peer communication experience powered by WebRTC.

### Key Highlights

- **Real-time Communication**: Low-latency video and audio streaming using WebRTC
- **Screen Sharing**: Share your screen with participants in real-time
- **Text Chat**: Integrated chat functionality for messaging during meetings
- **Room-based Architecture**: Create and join rooms with unique IDs
- **Modern UI**: Beautiful, responsive interface built with React and Tailwind CSS
- **Scalable**: Microservices architecture with separate services for signaling and peer management

## ✨ Features

### Core Features

- 🎥 **Video Conferencing**: High-quality video calls with multiple participants
- 🔊 **Audio Communication**: Crystal-clear audio streaming
- 📺 **Screen Sharing**: Share your entire screen or specific applications
- 💬 **Real-time Chat**: Send messages to all participants in a room
- 👥 **Multi-user Support**: Support for multiple participants in a single room
- 🎨 **Customizable Names**: Set and change your display name during meetings
- 🔗 **Room Management**: Create rooms with unique IDs and share them with others

### Technical Features

- **WebRTC P2P**: Direct peer-to-peer connections for optimal performance
- **Socket.io Signaling**: Real-time signaling server for connection establishment
- **TypeScript**: Full type safety across the entire codebase
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **E2E Testing**: Comprehensive end-to-end tests with Cypress

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.io Client** - Real-time bidirectional communication
- **PeerJS** - WebRTC peer-to-peer data, video, and audio calls
- **React Router** - Client-side routing
- **Heroicons** - Beautiful SVG icons

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Socket.io** - Real-time event-based communication
- **TypeScript** - Type-safe development
- **UUID** - Unique identifier generation

### Infrastructure
- **Docker** - Containerization
- **PeerJS Server** - WebRTC signaling server
- **Cypress** - End-to-end testing framework

## 🏗 Architecture

SyncSpace follows a microservices architecture with three main components:

```
┌─────────────┐
│   Client    │ (React Frontend)
│  Port: 3000 │
└──────┬──────┘
       │
       ├──────────────┬──────────────┐
       │              │              │
┌──────▼──────┐ ┌─────▼─────┐ ┌─────▼─────┐
│   Server    │ │  PeerJS   │ │  Socket   │
│ Port: 8080  │ │ Port:9001 │ │   Events  │
└─────────────┘ └───────────┘ └───────────┘
```

1. **Client**: React-based frontend application
2. **Server**: Express server handling Socket.io connections and room management
3. **PeerJS Server**: WebRTC signaling server for peer connections

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Docker** and **Docker Compose** (optional, for containerized deployment)
- **Git** for version control

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/SyncSpace.git
cd SyncSpace-main
```

### Install Dependencies

Install dependencies for all three services:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

# Install PeerJS server dependencies
cd ../peerjs
npm install
```

## 💻 Usage

### Development Mode

#### 1. Start the PeerJS Server

```bash
cd peerjs
npm run dev
```

The PeerJS server will run on `http://localhost:9001`

#### 2. Start the Backend Server

```bash
cd server
npm run dev
```

The server will run on `http://localhost:8080`

#### 3. Start the Client Application

```bash
cd client
npm start
```

The client will run on `http://localhost:3000` and automatically open in your browser.

### Production Build

#### Build All Services

```bash
# Build client
cd client
npm run build

# Build server
cd ../server
npm run build

# Build PeerJS server
cd ../peerjs
npm run build
```

#### Start Production Servers

```bash
# Start PeerJS server
cd peerjs
npm start

# Start backend server
cd ../server
npm start

# Serve client (use a static server like serve)
cd ../client
npx serve -s build -l 3000
```

## 📁 Project Structure

```
SyncSpace-main/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── chat/      # Chat-related components
│   │   │   └── ...        # Other UI components
│   │   ├── context/       # React context providers
│   │   ├── pages/         # Page components
│   │   ├── reducers/      # State management
│   │   ├── types/         # TypeScript type definitions
│   │   └── ...
│   ├── cypress/           # E2E tests
│   └── package.json
│
├── server/                # Express backend server
│   ├── src/
│   │   ├── room/          # Room management logic
│   │   └── index.ts       # Server entry point
│   └── package.json
│
├── peerjs/                # PeerJS signaling server
│   ├── src/
│   │   └── index.ts       # PeerJS server entry point
│   └── package.json
│
└── README.md
```

## 🔧 Development

### Available Scripts

#### Client (`client/package.json`)

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run e2e` - Run Cypress E2E tests

#### Server (`server/package.json`)

- `npm run dev` - Start in development mode with watch
- `npm run build` - Compile TypeScript
- `npm start` - Start production server
- `npm run watch` - Watch mode for TypeScript compilation

#### PeerJS (`peerjs/package.json`)

- `npm run dev` - Start in development mode
- `npm run build` - Compile TypeScript
- `npm start` - Start production server

### Environment Variables

Currently, the application uses default ports. You can modify them in:

- **Client**: Update `ws.ts` for Socket.io connection URL
- **Server**: Update port in `server/src/index.ts` (default: 8080)
- **PeerJS**: Update port in `peerjs/src/index.ts` (default: 9001)

## 🧪 Testing

### Run E2E Tests

```bash
cd client
npm run e2e
```

This will open the Cypress Test Runner where you can:
- Run tests in interactive mode
- Execute tests for chat functionality
- Test video conferencing features

### Test Files

- `client/cypress/e2e/chat.cy.ts` - Chat functionality tests
- `client/cypress/e2e/video.cy.ts` - Video conferencing tests

## 🐳 Docker Deployment

### Build Docker Images

```bash
# Build server image
cd server
docker build -t syncspace-server .

# Build PeerJS image
cd ../peerjs
docker build -t syncspace-peerjs .
```

### Run with Docker

```bash
# Run PeerJS server
docker run -d -p 9001:9001 syncspace-peerjs

# Run backend server
docker run -d -p 8080:8080 syncspace-server
```

### Docker Compose (Recommended)

Create a `docker-compose.yml` file in the root directory:

```yaml
version: '3.8'

services:
  peerjs:
    build: ./peerjs
    ports:
      - "9001:9001"
    restart: unless-stopped

  server:
    build: ./server
    ports:
      - "8080:8080"
    depends_on:
      - peerjs
    restart: unless-stopped
```

Then run:

```bash
docker-compose up -d
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Ensure code passes linting
- Update documentation as needed
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

