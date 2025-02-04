const express = require("express");
const path = require("path");
const mysql = require("mysql2");  
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);


const db = mysql.createConnection({
    host: "localhost",
    user: "root",  
    password: "Rishabh@123", 
    database: "chat_app"
});


db.connect(err => {
    if (err) {
        console.error("MySQL Connection Failed:", err);
        return;
    }
    console.log("Connected to MySQL Database");
});


app.use(express.static(path.join(__dirname, "/public")));


io.on("connection", socket => {
    console.log("A user connected");

    
    db.query("SELECT * FROM messages ORDER BY timestamp ASC", (err, results) => {
        if (err) {
            console.error("Failed to fetch messages:", err);
            return;
        }
        socket.emit("chat-history", results);  
    });

   
    socket.on("newuser", username => {
        socket.broadcast.emit("update", `${username} joined the chat`);
    });

   
    socket.on("chat", message => {
        const { username, text } = message;

        
        db.query("INSERT INTO messages (username, message) VALUES (?, ?)", [username, text], (err) => {
            if (err) {
                console.error("Failed to save message:", err);
                return;
            }
            console.log("💾 Message stored in DB");
        });

        socket.broadcast.emit("chat", message);  
    });

    
    socket.on("exituser", username => {
        socket.broadcast.emit("update", `${username} left the chat`);
    });
});


server.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
