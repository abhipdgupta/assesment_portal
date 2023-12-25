const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDb } = require("./src/connect/connectDb");
const assessmentRouter = require("./src/routes/assessment.routes");
const userRouter=require("./src/routes/users.routes")
const categoryRouter=require('./src/routes/categories.routes')
const questionRouter=require('./src/routes/questions.routes')

connectDb();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:9000"],
    credentials: true,
  })
);

app.use("/assessment", assessmentRouter);
app.use("/user", userRouter);
app.use("/categories",categoryRouter)
app.use("/questions",questionRouter)

PORT = 9001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
