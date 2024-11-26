const express = require("express");
require("dotenv").config();
const { schedule  } = require("./jobs/producer");
var Agendash = require("agendash");
const agenda = require("./jobs/agenda");
const port = process.env.SERVER_PORT || 3000;

// register the agenda definitions
const registerAgenda = async () => {
   await Promise.all([
        schedule.onBoardingMailNow(),
        schedule.dailyMail(),
        schedule.onBoardingMailNow(),
    ])
}

registerAgenda().catch(console.error);
const app = express();
app.use(express.json());
app.use("/dashboard", Agendash(agenda))
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
