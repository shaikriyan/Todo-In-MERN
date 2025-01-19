const express = require("express");
const { registerUser, loginUser } = require("../controllers/entry-controller");

const EntryRouter = express.Router();

EntryRouter.post("/register", registerUser);
EntryRouter.post("/login", loginUser);

module.exports = EntryRouter;
