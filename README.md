# chat-app
Here's a well-structured **README.md** for your chat application project:  

---

# **💬 Real-Time Chat App**  

A **real-time chat application** built with **Node.js**, **Socket.io**, and **MySQL**, allowing users to send messages, store them in a database, and retrieve past conversations.  

## 🚀 **Features**  

✅ Real-time messaging using **Socket.io**  
✅ Stores messages in **MySQL** database  
✅ Displays chat history when a user joins  
✅ Supports multiple users in a single chat room  
✅ Simple and user-friendly UI  

---

## ⚙️ **Tech Stack**  

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js, Socket.io  
- **Database:** MySQL  

---

## 🛠 **Installation & Setup**  

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/rishabhmrd25/chat-app.git
cd chat-app
```

### 2️⃣ **Install Dependencies**  
```sh
npm install
```

### 3️⃣ **Set Up MySQL Database**  
1. Open MySQL and create a database:  
```sql
CREATE DATABASE chat_app;
USE chat_app;
```
2. Create a `messages` table:  
```sql
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
3. Update the **`server.js`** file with your MySQL credentials.

### 4️⃣ **Start the Server**  
```sh
node server.js
```
or  
```sh
npm run dev   # If using nodemon
```

### 5️⃣ **Run the App**  
- Open your browser and go to:  
  **`http://localhost:3000`**  

---

## 📸 **Screenshots**  

🖼️ *(Add images of your UI here)*  

---

## 🔗 **Live Demo**  

*(If hosted, add the link here, e.g., Vercel, Heroku, or Render)*  

---

## 📝 **Contributing**  

1. Fork the repo  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Commit changes (`git commit -m "Added new feature"`)  
4. Push to branch (`git push origin feature-branch`)  
5. Create a Pull Request  

---

## 🛡️ **License**  

This project is licensed under the **MIT License**.  

---

## 🤝 **Connect with Me**  

👤 **Rishabh Muradpuri**  
- GitHub: [@rishabhmrd25](https://github.com/rishabhmrd25)  
- LinkedIn: *(Add your LinkedIn profile link here)*  
- Twitter: *(Add your Twitter handle here)*  

---

Let me know if you need any modifications! 🚀
