import express from "express";
import { ObjectId } from "mongodb";
import { db } from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;
const items = db.collection("items");

app.use(express.json());
app.use(express.static("public"));

app.get("/api/items", async (req, res) => {
    res.json(await items.find().toArray());
});

// live-code: POST

// live-code: PATCH

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});console.log('Happy developing ✨')
