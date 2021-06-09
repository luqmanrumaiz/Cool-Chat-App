// Imports

import express from "express";

// App Configs

const app = express(); // Express Application Instance
const port = process.env.PORT || 9000;

// Middleware

// DB Config

// API Routes

app.get("/", (req, res) => res.status(200).send("Hello World")); // Creating a test Base URL Get Request

// Listner

app.listen(port, () => console.log("Listening on localhost:9000}"));
