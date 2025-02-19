# DevConnect - The Ultimate Developer Social Network 🚀

## 📌 Overview

DevConnect is a **modern social network** designed exclusively for developers! Connect, collaborate, and share your projects with the global dev community. Whether you're looking for feedback on your latest project or just want to geek out over tech trends, DevConnect is the place to be!  

## ✨ Features

- 🔐 **OAuth Authentication** (GitHub & Google)
- 👤 **User Profiles** (Bio, Skills, Projects, and Social Links)
- 💬 **Real-time Chat** (WebSockets)
- 📝 **Community Forum** (Posts, Comments, Upvotes)
- 🎨 **Code Snippet Sharing** (Markdown + Monaco Editor)
- 🔔 **Live Notifications** (Real-time updates)
- ⚡ **Blazing Fast Performance** (GraphQL + Redis Caching)
- 🚀 **Dockerized & Scalable** (Kubernetes-Ready)

## 🛠 Tech Stack

### Frontend:

- **Next.js** (SEO-friendly & Server-Side Rendering)
- **Tailwind CSS** (Modern UI Styling)
- **Apollo Client** (GraphQL API Integration)

### Backend:

- **Node.js + Express** (Backend API)
- **GraphQL (Apollo Server)** (Efficient Data Fetching)
- **PostgreSQL + Prisma** (Relational Database)
- **Redis** (Caching & Optimizations)
- **Socket.io** (Real-time WebSockets for Chat & Notifications)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/DevConnect.git
   cd DevConnect
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables** (Create a `.env` file)

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/devconnect
   REDIS_URL=redis://localhost:6379
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```sh
   npm run dev
   ```

## 📸 Screenshots

| Home Page | Developer Profile | Real-time Chat |
|-----------|------------------|--------------|
| ![Home](screenshots/home.png) | ![Profile](screenshots/profile.png) | ![Chat](screenshots/chat.png) |

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, submit a PR, or open an issue.

## 📜 License

This project is licensed under the **MIT License**.

---
🚀 **Join DevConnect and be part of the future of developer networking!**
