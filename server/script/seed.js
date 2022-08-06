const {
  db,
  models: { Team },
} = require("../db/index.js");

const syncAndSeed = async () => {
  await db.sync({ force: true });
  /////////////////////////////////////////////////////////////
  await Team.create({ name: "chiefs", spread: 8, locked: true, rank: 14 });
  await Team.create({ name: "eagles", spread: 8, locked: true, rank: 5 });
  await Team.create({ name: "ravens", spread: 3.5 });
  await Team.create({ name: "browns", spread: 5.5 });
  await Team.create({ name: "pack", spread: 3 });
  await Team.create({ name: "titans", spread: 10.5 });
  await Team.create({ name: "colts", spread: 14.5 });
  await Team.create({ name: "vikings", spread: 4 });
  await Team.create({ name: "wash", spread: 7 });
  await Team.create({ name: "saints", spread: 3.5 });
  await Team.create({ name: "bills", spread: 16.5 });
  await Team.create({ name: "pats", spread: 6 });
  await Team.create({ name: "bucs", spread: 9 });
  await Team.create({ name: "cards", spread: 5.5 });
  await Team.create({ name: "rams", spread: 3.5 });
  await Team.create({ name: "chargers", spread: 3 });
};

module.exports = syncAndSeed;
