# 💰 ExpensifyAI – Smart Expense Tracker

A full-stack expense tracking application built using the MERN stack (MongoDB, Express, React, Node.js).

This application allows users to register, manage their expenses, track monthly targets, and analyze spending through interactive dashboards.

---

## 🚀 Live Demo

Frontend (Netlify):  
https://expensifyaitracker.netlify.app/

Backend (Render):  
https://expense-tracker-backend-rcnh.onrender.com/

---

## 📌 Project Overview

ExpensifyAI is a full-stack web application designed to help users:

- Track daily expenses
- Monitor monthly spending
- Set financial targets
- Analyze category-wise expense breakdown
- Get alerts when monthly target is exceeded

The application demonstrates:
- Frontend development with React
- Backend API development using Node.js & Express
- Secure authentication using JWT
- MongoDB database integration
- Aggregation queries for analytics
- Production deployment

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Recharts (for analytics charts)
- Axios (API communication)
- React Router

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt (password hashing)
- Mongoose (MongoDB ORM)

### Database
- MongoDB Atlas (Cloud Database)

### Hosting
- Backend → Render
- Frontend → Netlify

---

## ✨ Features Implemented

### 🔐 Authentication
- User Registration
- User Login
- JWT-based protected routes
- Secure password hashing

### 💵 Expense Management
- Add Expense
- Edit Expense
- Delete Expense
- Filter by Category
- Search by Title
- Pagination

### 📊 Dashboard Analytics
- Total Spent Calculation (Aggregation)
- Category-wise Summary (Aggregation)
- Monthly Expense Summary
- Transaction Count
- Main Category Detection
- Monthly Target Exceeded Warning

### 📱 Responsive UI
- Mobile-friendly layout
- Adaptive grid design
- Clean modern UI using Tailwind

---

## 🗄️ Database Schema

### User Model

```js
{
  name: String,
  email: String,
  password: String (hashed),
  monthlySalary: Number,
  monthlyTarget: Number,
  timestamps: true
}
