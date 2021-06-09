// Imports

import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import Messages from "./dbMessages.js";

// App Configs

const app = express(); // Express Application Instance
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1216786",
  key: "7a8d350eb42175e7d33b",
  secret: "c2974bfd79d8b37364de",
  cluster: "ap2",
  useTLS: true,
});

// Middleware

app.use(express.json());

// Removing Headers from Message and allowing message to be sent from any Endpoint
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// DB Config

const connection_url =
  "mongodb+srv://admin:injuJ9cJMbZBLNuX@cool-chat-app-cluster.tje4j.mongodb.net/coolchatdb?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to Database !");

  const messageCollection = db.collection("messagecollections");
  const changeStream = messageCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A Change has Occured : ", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        recieved: messageDetails.recieved,
      });
    } else {
      console.log("Error Triggering Pusher !!!");
    }
  });
});

// API Routes

app.get("/", (req, res) => res.status(200).send("Hello World")); // Creating a test Base URL Get Request

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listner

app.listen(port, () => console.log("Listening on localhost:9000}"));
