# PixelBoost AI

PixelBoost AI is a React-based web application that enhances image resolution using artificial intelligence through third-party REST API integration.

The application integrates the **PicWish Image Enhancement API** to upscale and improve image quality. It demonstrates how to consume external APIs, handle asynchronous requests, and implement a polling mechanism for long-running tasks.

---

## Live Demo

pixel-boost-ai.vercel.app


---

## Features

- Upload and enhance images using AI
- Integration with a third-party REST API (PicWish)
- Asynchronous API request handling using Axios
- Polling mechanism for long-running processing tasks
- Secure API key management using environment variables
- Loading states and error handling
- Download enhanced images

---

## Tech Stack

- React
- Vite
- Axios
- Tailwind CSS
- REST API

---

## Project Structure
src
│
├── components
│ ├── Home.jsx
│ ├── ImageUpload.jsx
│ ├── ImagePreview.jsx
│ └── Loading.jsx
│
├── utils
│ └── enhanceImageApi.js
│
├── App.jsx
├── main.jsx
└── index.css


---

## Installation

Clone the repository

```bash
git clone https://github.com/FUNCTIONCALL-AGRIM/PixelBoost-AI.git

## Navigate to the project folder
-cd PixelBoost-AI

##Run the development server
-npm run dev

##Open in browser
-- http://localhost:5173

## Environment Variables
## Create a .env file in the root directory:
-VITE_API_KEY=your_api_key_here
-This API key is used to authenticate requests to the PicWish API.

## API Workflow
-The application follows a multi-step API workflow:
-Upload an image to the API
-Receive a task ID
-Poll the API using the task ID
-Retrieve the enhanced image when processing completes
--- This demonstrates handling asynchronous operations and long-running tasks in a frontend application.

## Author
-- Agrim Mishra

## GitHub:
-- https://github.com/FUNCTIONCALL-AGRIM

