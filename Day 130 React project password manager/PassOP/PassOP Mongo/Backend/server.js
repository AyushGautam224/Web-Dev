import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";



import bodyParser from "body-parser";

dotenv.config();

const app = express();

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "PassOP";
const port = 3000;
app.use(express.json())


await client.connect();
console.log("Connected to MongoDB");


//Get  all the passwords
app.get("/", async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
});

//Save the passwords
app.post("/", async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.insertOne(password);
    res.send({success: true , result:findResult});
})

//Delete password
app.post("/", async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.deleteOne(password);
    res.send({success: true , result:findResult});
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

