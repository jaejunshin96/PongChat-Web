# ft_transcendence

## Overview

This web project is a full-stack application combining **Django** and **React** to create a feature-rich pong tournament platform with:

- **Real-Time Tournaments**: Users can join and compete in live pong tournaments.
- **Multiplayer Pong Game**: Interactive, real-time pong matches with other players.
- **Live Chat System**: Engage in live conversations with other users and send game invites through chat.
- **Secure User Authentication**:
  - Two-Factor Authentication (2FA) using the **42 School API** for added security.
- **Blockchain Storage**:
  - Stores tournament and game data securely using **Solidity smart contracts** on the **Ganache** testnet.
- **Modern Tech Stack**: Built with **Django** for backend and **React** with TypeScript for frontend.

---

## Key Features

- **User Authentication**:
  - Secure login and registration system using Django’s built-in authentication.
  - Two-Factor Authentication (2FA) integrated with the **42 School API** to provide an additional security layer for user accounts.
  - Authorization roles for managing access control across different areas of the platform.

- **Live Chat System**:
  - Real-time messaging using WebSockets, allowing users to chat with each other during gameplay and tournaments.
  - Invitation capabilities embedded within the chat, letting users invite each other to a pong game or a tournament directly from the chat window.
  - Notifications for invites, friend requests, and tournament updates.

- **Tournament System**:
  - Dynamic tournament management where users can create, join, and participate in various pong tournaments.
  - Bracket generation for tournament rounds, allowing for seamless progression through different stages.
  - Integration with the pong game to update tournament outcomes and player stats in real-time.

- **Multiplayer Pong Game**:
  - Real-time, multiplayable pong game using WebSockets, allowing players to challenge each other in 1v1 matches.
  - Gameplay features include scoring, real-time paddle movements, and latency management for smooth gameplay.
  - Score tracking and game stats stored and updated throughout the platform.

- **Blockchain Storage**:
  - Blockchain integration for secure data storage using **Solidity** smart contracts and **Ganache** as the test network.
  - Tournament and match data are stored on the blockchain, ensuring tamper-proof and transparent records of match outcomes.
  - Future scalability to integrate with Ethereum or another mainnet for production-ready data integrity.

---

## Tech Stack

### Backend
- **Django** (Python): Powers the backend API, handles authentication, tournament management, and integrates with blockchain functions.
- **Django Channels**: Manages real-time WebSocket connections for live chat and gameplay interactions.
- **42 School API**: Used for OAuth2 and 2FA, leveraging the OAuth flow for secure login and access control.

### Frontend
- **React** (TypeScript): Provides a robust, type-safe front-end with a modular architecture for rendering the user interface.
- **React Router**: Manages in-app navigation, making the app feel seamless and responsive.
- **WebSocket API**: Supports real-time communication for live gameplay and chat functions.

### Blockchain
- **Solidity**: Smart contracts deployed on the **Ganache** testnet to store tournament and game data securely.
- **Ganache**: Local Ethereum blockchain used for testing and development, simulating a production blockchain environment.
- **Web3.js**: JavaScript library to interact with the blockchain, making calls to smart contracts from the frontend.

---

## System Architecture

1. **Django Backend**:
   - **API Layer**: Exposes a RESTful API to handle authentication, user data, and tournament management.
   - **WebSocket Layer**: Manages real-time data flow for the live chat and multiplayer pong game using Django Channels.
   - **Blockchain Integration**: Interfaces with the Ganache blockchain to push and retrieve game data securely.
   
2. **React Frontend**:
   - **Component-Based UI**: Each feature (chat, tournament, pong game) is encapsulated as a React component, providing modularity and ease of maintenance.
   - **State Management**: Uses React’s state management for real-time updates, keeping UI consistent with backend and WebSocket events.
   - **TypeScript**: Enforces strict typing, catching errors early in development and ensuring a more reliable and robust application.

3. **Blockchain Storage**:
   - **Smart Contracts**: Custom smart contracts written in Solidity to store match and tournament data on the blockchain.
   - **Web3.js**: Facilitates interaction with smart contracts, allowing the platform to write data to and read data from the blockchain in real time.

---

## Core Functionalities

- **User Authentication and 2FA**:
  - OAuth2 authentication with the 42 School API.
  - 2FA using tokens provided by the 42 API, ensuring user accounts are secure.
  
- **Live Chat and Invitations**:
  - Live chat using WebSockets, allowing real-time messaging.
  - Users can invite each other to pong matches or tournaments directly from the chat interface.
  
- **Tournament System**:
  - Allows users to create and manage tournaments.
  - Real-time updates for tournament brackets as players progress.

- **Pong Game**:
  - Multiplayer pong with real-time synchronization of movements and scoring.
  - Uses WebSockets to handle the gameplay experience, with minimal latency.

- **Blockchain Storage**:
  - Stores key match and tournament data using Solidity smart contracts on Ganache.
  - Ensures data integrity and security, making it resistant to tampering.

---

## Skills Demonstrated

- **Full-Stack Development**: Built a robust application with Django, React, and TypeScript, showcasing both backend and frontend skills.
- **Real-Time Communication**: Implemented WebSockets for live chat and gameplay synchronization, providing a responsive user experience.
- **Blockchain Development**: Developed Solidity smart contracts for secure data storage and integrated with Ganache, enabling tamper-proof tournament and match records.
- **Authentication and Security**: Integrated 2FA via the 42 School API for enhanced user security.
- **API Integration**: Leveraged the 42 School API for user data and authentication, and integrated with Web3.js for blockchain interactions.

---

## Conclusion

This project combines modern web development with cutting-edge technologies to deliver a secure and engaging pong tournament platform. With features like real-time chat, multiplayer gaming, secure authentication, and blockchain data storage, this application provides a comprehensive showcase of full-stack, real-time, and blockchain development skills.
