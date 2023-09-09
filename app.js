const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const user = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

const currentDate = new Date();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayIndex = currentDate.getUTCDay();
const currentDayName = dayNames[currentDayIndex];

const currentUTCTime = new Date().toISOString();



app.get("/api", (req,res)=> {
  res.status(200).json({
    slack_name: req.query.slack_name,
    current_day: currentDayName,
    utc_time: currentUTCTime,
    track: req.query.track,
    github_file_url: user.github_file_url,
    github_repo_url: user.github_repo_url,
    status_code: user.status_code,
});
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// add .split('.')[0] + 'Z' after your Date().toISOString()
