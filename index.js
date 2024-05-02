import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import feedbackroutes from "./feedbackRoutes.js";

dotenv.config();
const app = express();
const port = 7000;
const allowedOrigins=[
    "http://localhost:51587","http://localhost:7000"
]
const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
    credentials: true,
  };
app.use(express.json());
app.use(cors(corsOptions));
app.get('/', (req, res) => res.send('Hello World!'));
app.use("/feedback",feedbackroutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));




