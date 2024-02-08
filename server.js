const express = require("express");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const appRouter = require("./routers/appRouter");
const shortenRouter = require("./routers/shortenRouter");
const urlRouter = require("./routers/urlRouter");

app.use(express.json());
app.use(cors());

app.use("/", appRouter);
app.use("/shorten", shortenRouter);
app.use("/tiny", urlRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
