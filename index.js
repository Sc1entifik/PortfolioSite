import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { sendMessageFromForm } from "./mailer.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

dotenv.config()
app.use(express.static(path.join(__dirname, "public")));
const encodeOptions = express.urlencoded({
	extended: false,
	limit: 10000,
	parameterLimit: 3,
});

app.set("view engine", "html");

app.get("/", (req, res) => res.sendFile("index.html"));
app.get("/contact", (req, res) => res.sendFile("contact.html"));

app.post("/contact", encodeOptions, (req, res) => {
	sendMessageFromForm(req.body);
});

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}`));
