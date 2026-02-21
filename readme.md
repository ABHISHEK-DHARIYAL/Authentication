# 🔐 Authentication System (Node.js + JWT + MongoDB)

A secure authentication system built using **Node.js, Express, MongoDB, JWT, and bcrypt**.

This project demonstrates user registration, login, password hashing, token-based authentication, and protected routes.

---

## 🚀 Features

- User Registration  
- User Login  
- Password Hashing using bcrypt  
- JWT Token Generation  
- Protected Routes  
- MongoDB User Storage  
- Frontend ↔ Backend API Communication  

---

## 🛠 Technologies Used

### 🔹 bcrypt — Password Security
Purpose: Hash passwords before storing them in the database.

```bash
npm install bcrypt
```

---

### 🔹 jsonwebtoken (JWT)
Purpose: Generate and verify authentication tokens.

```bash
npm install jsonwebtoken
```

---

### 🔹 mongoose
Purpose: MongoDB database interaction.

```bash
npm install mongoose
```

---

### 🔹 express
Purpose: Backend server framework.

```bash
npm install express
```

---

### 🔹 cors
Purpose: Allow frontend ↔ backend communication.

```bash
npm install cors
```

---

## 📂 Project Structure

```
project/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   └── views/
│       └── home.ejs
│
└── frontend/
    ├── login.html
    ├── register.html
    └── auth.js
```

---

# ⚙️ How To Start The Project

## 1️⃣ Go to Backend Folder

```bash
cd backend
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Create `.env` File (inside backend folder)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Example (Local MongoDB):

```
MONGO_URI=mongodb://127.0.0.1:27017/authenticationDB
```

---

## 4️⃣ Start the Server

```bash
node server.js
```

OR

```bash
npm start
```

---

## 🌍 Open in Browser

Backend runs at:

```
http://localhost:5000
```

If frontend is separate, open:

```
frontend/login.html
```

---

## 🧠 One-Line Exam Answer

Authentication is implemented using bcrypt for password hashing, JSON Web Tokens for session management, and MongoDB for secure user storage.

JWT (JSON Web Token) is a self-contained, digitally signed token used to prove that a user is authenticated.

---

## 👨‍💻 Author

NotKnown  

---

⭐ If you found this helpful, consider giving it a star!
