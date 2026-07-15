# Aarohi

> Empowering Every Cycle Through Education

Aarohi is an AI-powered menstrual health education platform designed to make reliable, beginner-friendly, and stigma-free learning accessible to adolescents. The platform combines structured educational modules, interactive learning experiences, and an AI companion named **Sakhi** to create a safe environment where users can learn and ask questions confidently.

---

## Overview

Menstrual health education is still surrounded by misinformation, social stigma, and limited access to reliable resources. Many adolescents rely on myths or fragmented information found online and often hesitate to ask questions openly.

Aarohi addresses this challenge by providing structured lessons, trusted educational content, interactive quizzes, myth-busting resources, and a conversational AI assistant—all in one place.

---

## Features

- Structured learning modules
- AI-powered assistant (Sakhi)
- Interactive quizzes
- Myths & Facts
- Learning progress tracking
- Medical glossary support
- Conversation history
- Secure authentication
- Responsive design

---

## Screenshots

### Home

![Home](docs/screenshots/home.png)

### Learn

![Learn](docs/screenshots/learn.png)

### Lesson

![Lesson](docs/screenshots/lesson.png)

### Ask Sakhi

![Ask Sakhi](docs/screenshots/ask-sakhi.png)

### Myths & Facts

![Resources](docs/screenshots/resources.png)

---

## Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React, Vite, TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| AI | Google Gemini API |
| Authentication | JWT, bcrypt |
| HTTP Client | Axios |

---

## Architecture

The project follows a client-server architecture.

- **Frontend** – React application built with Vite
- **Backend** – Express REST API
- **Database** – MongoDB using Mongoose
- **AI Layer** – Google Gemini powering Sakhi
- **Authentication** – JWT-based user authentication

---

## Project Structure

```text
client/
├── assets
├── components
├── context
├── pages
├── services
└── styles

server/
├── config
├── controllers
├── middleware
├── models
├── routes
├── services
└── utils
```

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Google Gemini API Key

### Clone the Repository

```bash
git clone <repository-url>
cd Aarohi
```

### Install Dependencies

Backend

```bash
cd server
npm install
```

Frontend

```bash
cd client
npm install
```

### Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

### Run the Application

Backend

```bash
cd server
npm run dev
```

Frontend

```bash
cd client
npm run dev
```

---

## AI Assistant

**Sakhi** is an AI-powered menstrual health companion built using Google Gemini.

It helps users by providing:

- Science-backed guidance
- Beginner-friendly explanations
- Context-aware conversations
- A safe and private learning experience

---

## Future Improvements

- AI-powered video lessons
- Menstrual cycle tracking
- Multilingual support
- Community discussions
- Personalized learning recommendations
- Expert-reviewed educational resources

---

## Contributors

| Name | Role |
|------|------|
| Rakshita Dadhich | Full Stack Developer |
| Team Members | Design, Development & Research |

---

## License

This project was developed for educational and hackathon purposes.

---

<p align="center">
Made with ❤️ by Team Aarohi
</p>
