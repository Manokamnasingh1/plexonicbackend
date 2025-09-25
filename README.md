# 🛠️ Mini Webpage Builder

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io&logoColor=white)](https://socket.io/)

A **drag-and-drop webpage builder** with real-time collaboration, live preview, and JWT authentication.  

---

## 📌 Table of Contents
- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Features](#features)
  - [Frontend Features](#frontend-features)
  - [Backend Features](#backend-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Pages & API Overview](#pages--api-overview)
- [Screenshots](#screenshots)
- [Evaluation Criteria](#evaluation-criteria)
- [Future Enhancements](#future-enhancements)

---

## 🌟 Project Overview

The **Mini Webpage Builder** allows users to:  

- 🎨 Drag & drop **Text, Image, Button, Container, Form, Divider, Card, and List blocks**  
- ✏️ Customize block **styles, alignment, spacing, and content**  
- 💾 Save pages in **MongoDB**  
- 👀 Preview pages live  
- 🤝 Collaborate in **real-time** using Socket.IO  
- 🔐 Authenticate with **JWT**  
- 🌐 Publish pages as **static HTML**  

---

## 🎯 Objectives

- 🖌️ Provide **visual page editing** for non-technical users  
- 🤝 Enable **real-time collaborative editing**  
- 🔐 Support **authentication & authorization**  
- 📱 Maintain **responsive design** across devices  

---

## ✨ Features

### Frontend Features
<details>
<summary>Click to expand</summary>

- 🧩 **Sidebar Blocks:** Text, Image, Button, Container, Form, Divider, Card, List  
- 🖼️ **Canvas Area:** Drag-and-drop, nested blocks, reorder/duplicate/delete  
- ⚙️ **Block Settings Panel:** Customize fonts, colors, alignment, spacing, backgrounds  
- 👁️ **Preview Panel:** Live preview in desktop/tablet/mobile modes  
- ↩️ **Undo/Redo:** Action history  
- 🔎 **Preview Mode:** `/preview/:pageId` route for read-only view  
- 🔐 **Authentication:** Login & Signup with JWT  
- 🌐 **Real-time Collaboration:** Socket.IO for multi-user editing  

</details>

### Backend Features
<details>
<summary>Click to expand</summary>

- 💾 **Page Schema Storage:** Draft & published pages in MongoDB  
- 🔐 **User Authentication:** JWT-based login/signup  
- 📄 **CRUD API Endpoints:** Create, read, update, delete pages  
- ⚡ **Real-time Collaboration:** Socket.IO events (`joinPage`, `blockAdded`, `blockUpdated`, `blockDeleted`)  
- ✅ **Secure APIs:** Authorization for protected routes  

</details>

---

## 🛠️ Tech Stack

| Layer       | Tech |
|------------|-----------------------------------|
| Frontend   | React, Vite, Context API, CSS/SCSS |
| Backend    | Node.js, Express.js, MongoDB, Mongoose |
| Real-time  | Socket.IO |
| Auth       | JWT, bcrypt |
| Utilities  | Axios, dotenv, cors |

---

## 📂 Project Structure

### Frontend

