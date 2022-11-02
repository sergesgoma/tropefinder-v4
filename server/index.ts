import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import path from "path";
import * as dotenv from "dotenv";
import { router } from "./app/router";

dotenv.config({ path: __dirname + "/.env" });

const PORT = process.env.PORT || 5000;

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// extraction of the form data + addition of the req.body proprieties
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: String(process.env.SECRET_KEY),
    resave: false,
    saveUninitialized: false,
  })
);

app.use(router);

// launch of the server + listening
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
