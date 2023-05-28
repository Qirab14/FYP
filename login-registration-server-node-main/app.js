const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl =
  "mongodb+srv://adarsh:adarsh@cluster0.zllye.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect("mongodb://127.0.0.1:27017/testDB", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
require("./imageDetails");

const User = mongoose.model("UserInfo");
const Images = mongoose.model("ImageDetails");
app.post("/register", async (req, res) => {
  const { fname, lname, qname, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      qname,
      email,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "25m",
    });
    
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

// Define a schema for the text data
const textSchema = new mongoose.Schema({
  content: String
});

// Define a model for the text data
const Text = mongoose.model('Text', textSchema);

// Parse incoming JSON request bodies
app.use(express.json());

// Define a route to save text data
app.post('/problem1', (req, res) => {
  const content = req.body.text;
  const text = new Text({ content });
  text.save()
    .then(() => {
      res.json({ message: 'Text saved successfully' });
    })
    .catch(error => {
      console.error('Error saving text', error);
      res.status(201).json({ message: 'Error saving text' });
    });
});

// Define a schema for the quiz data
const quizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: Number
});

// Define a model for the quiz data
const Quiz = mongoose.model('Quiz', quizSchema);

// Define a route to save quiz data
app.post('/quiz', (req, res) => {
  const { question, options, answer } = req.body;
  const quiz = new Quiz({ question, options, answer });
  quiz.save()
    .then(() => {
      res.json({ message: 'Quiz saved successfully' });
    })
    .catch(error => {
      console.error('Error saving quiz', error);
      res.status(500).json({ message: 'Error saving quiz' });
    });
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "25m",
    });
    
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.status(401).json({ error: "Invalid email or password" });
});

app.listen(5000, () => {
  console.log("Server Started");
});
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

// server.listen(3001, () => {
//   console.log("SERVER RUNNING");
// });

