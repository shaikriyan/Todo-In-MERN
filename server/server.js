require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectToDB = require("./database/database");
const cors = require('cors');
const EntryRouter = require("./routers/entry-router");
const TodosRouter = require('./routers/todos-router');


const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

// connect to DB.
connectToDB();

app.use(cors({origin : ' * ', credentials : true}))

// we will declare the routers here..

app.use("/api/entry", EntryRouter);
app.use("/api/todos", TodosRouter);

app.get("/", (req, resp) => {
  resp.status(200).send("Hello, Backend server configured successfully.");
});

// app.get('*', (req, resp)=>{
//     resp.status(404).send("Page not Found");
// })

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
