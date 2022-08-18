//test below w/ 16 teams
//
//2+ non-locked w/ same spread, only 1 team = locked, locked team has diff spread as the non-locked dupe spread
//2+ non-locked w/ same spread for 2 diff spreads, only 1 team = locked, locked team has the same spread as the non-locked dupe spread
//2+ non-locked w/ same spread for 2 diff spreads, only 1 team = locked, locked team has diff spread as the non-locked dupe spread

//2+ non-locked w/ same spread, 2+ teams = locked, but with diff spreads for each lock, one of the locked spreads is the same as the dupe non-locked spread
//2+ non-locked w/ same spread, 2+ teams = locked, but with diff spreads for each lock, locked spreads are diff from the dupe non-locked spread
//2+ non-locked w/ same spread for 2 diff spreads, 2+ teams = locked, but with diff spreads for each lock, one of the locked spreads is the same as the dupe non-locked spread
//2+ non-locked w/ same spread for 2 diff spreads, 2+ teams = locked, but with diff spreads for each lock, locked spreads are diff from the dupe non-locked spread

//local:host work - try and break everything

//roll through each file and comment stuff out

const express = require("express");
const app = express();
const syncAndSeed = require("./server/script/seed");
const path = require("path");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use("/", require("./server/api/teams.js"));

app.use("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "html/main.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 1919;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
