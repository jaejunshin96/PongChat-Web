# PongChat Website 
<img width="700" alt="Screenshot 2025-02-28 at 5 11 56 pm" src="https://github.com/user-attachments/assets/940be775-8c2b-4bf9-a8b1-a155a3cf541c" />
<img width="700" alt="Screenshot 2024-11-11 at 3 37 20 pm" src="https://github.com/user-attachments/assets/ee6a8671-98df-4ffd-a430-2955dea9ba60">
<img width="700" alt="Screenshot 2024-11-11 at 3 36 59 pm" src="https://github.com/user-attachments/assets/00f2ad8e-845c-49a0-8f31-355f88caeede">
<img width="700" alt="Screenshot 2024-11-11 at 3 37 34 pm" src="https://github.com/user-attachments/assets/4881e20f-3013-4953-8b7e-1bb3f294aef0">

# Project Team
- **Jaejun Shin (https://github.com/jaejunshin96)**
- **Mehdi Mirzaie (https://github.com/MehdiMirzaie2)**
- **Louis Xu (https://github.com/louissxu)**
- **Jo Marks (https://github.com/markjso)**
- **Isaac Vanderwal (https://github.com/vanderhammer91)**

---

# Tech Stack

<div style="display: flex; align-items: flex-start;">
    <img src="https://techstack-generator.vercel.app/django-icon.svg" alt="Django" width="65" height="65" />
    <img src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python" width="65" height="65" />
    <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" width="65" height="65" />
    <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="TypeScript" width="65" height="65" />
    <img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="REST API" width="65" height="65" />
    <img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="Docker" width="65" height="65" />
    <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="Nginx" width="65" height="65" />
    <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" width="65" height="65" alt="PostgreSQL" title="PostgreSQL"/>
</div>

---

# Overview

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

# Key Features

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
