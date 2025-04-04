import express from 'express';
import router from "./src/routes/index.js"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(router);
// app.listen(3000);

export default app;