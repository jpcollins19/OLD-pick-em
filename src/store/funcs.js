const { menuItemClasses } = require("@mui/material");

const createCountObj = (arr, key) => {
  return arr.reduce((a, obj) => {
    a[obj[key]] ? a[obj[key]]++ : (a[obj[key]] = 1);
    return a;
  }, {});
};

const setAudit = (arr) => {
  console.log("arr", arr);

  const set = new Set(arr);

  // console.log("set", set);

  let error = false;

  if (set.size === 2 && set.has(null)) error = true;

  if (set.size === 1 && set.has(null)) error = true;

  // console.log("error in set func", error);

  return error;
};

const blankAuditFunc = (setObj) => {
  let error = true;

  const audit = [];

  Object.values(setObj).forEach((team) => {
    const set = new Set([team.name, team.rank, team.spread, team.locked]);

    set.size === 2 && set.has(null) && set.has(false)
      ? audit.push("NIGO")
      : audit.push("IGO");
  });

  const setAudit = new Set(audit);

  if (setAudit.size === 2 && setAudit.has("IGO")) error = false;

  return error;
};

const randomizeSingleSpread = (arr) => {
  // console.log("randomizeSingleSpread arr", arr);

  const lockedAudit = arr.map((team) => team.locked);

  let numOfTeams = arr.length;

  let counter = numOfTeams;

  let highestRank = arr[0].rank;
  let lowestRank = arr[0].rank;

  arr.forEach((team) => {
    if (team.rank > highestRank) highestRank = team.rank;
    if (team.rank < lowestRank) lowestRank = team.rank;
  });

  // console.log("highestRank", highestRank);
  // console.log("lowestRank", lowestRank);

  const ranksUsed = [];
  const idxsUsed = [];

  const randomizedObj = {};

  let randomRank, randomIdx, lockedTeams, unLockedTeams, currentIdxTeam;

  if (lockedAudit.includes(true)) {
    // console.log("lockedAudit = true");
    lockedTeams = arr.filter((team) => team.locked);
    unLockedTeams = arr.filter((team) => !team.locked);

    // console.log("lockedTeams", lockedTeams);
    // console.log("unLockedTeams", unLockedTeams);

    lockedTeams.forEach((team) => {
      ranksUsed.push(team.rank);
      randomizedObj[team.rank] = team.name;
      counter--;
    });

    numOfTeams = unLockedTeams.length;
  }

  // console.log("randomizedObj", randomizedObj);
  // console.log("counter", counter);

  if (unLockedTeams !== undefined && unLockedTeams.length === 1) {
    const team = unLockedTeams[0];

    randomizedObj[team.rank] = team.name;
  } else {
    while (counter > 0) {
      randomRank = Math.ceil(Math.random() * highestRank);
      randomIdx = Math.floor(Math.random() * numOfTeams);

      if (
        randomRank >= lowestRank &&
        randomRank <= highestRank &&
        !ranksUsed.includes(randomRank) &&
        !idxsUsed.includes(randomIdx)
      ) {
        currentIdxTeam = lockedAudit.includes(true)
          ? unLockedTeams[randomIdx].name
          : arr[randomIdx].name;

        randomizedObj[randomRank] = currentIdxTeam;
        ranksUsed.push(randomRank);
        idxsUsed.push(randomIdx);
        counter--;
      }
    }
  }

  arr = Object.entries(randomizedObj).map((entry) => {
    team = arr.find((team) => team.name === entry[1]);
    team.rank = Number(entry[0]);
    return team;
  });

  // console.log("randomizeSingleSpread arr before return", arr);

  return arr;
};

const randomize = (arr) => {
  // console.log("randomize OG arr", arr);

  const sameSpreadAuditObj = arr.reduce((a, team) => {
    !a[team.spread] ? (a[team.spread] = [team]) : a[team.spread].push(team);

    return a;
  }, {});

  // console.log("sameSpreadAuditObj", sameSpreadAuditObj);

  let newArr = [];

  Object.keys(sameSpreadAuditObj).forEach((number) => {
    const newOrder = randomizeSingleSpread(sameSpreadAuditObj[number]);

    newArr = [...newArr, ...newOrder];
  });

  // console.log("newArr", newArr);

  return newArr;
};

const sameSpreadAudit = (arr) => {
  // console.log("sameSpreadAudit arr", arr);

  const spreadCountObj = createCountObj(arr, "spread");

  // console.log("spreadCountObj", spreadCountObj);

  let dupeSpreadTeams = arr.filter((team) => spreadCountObj[team.spread] > 1);
  let nonDupeSpreadTeams = arr.filter(
    (team) => spreadCountObj[team.spread] === 1
  );

  // console.log("dupeSpreadTeams before randomize", dupeSpreadTeams);
  // console.log("nonDupeSpreadTeams", nonDupeSpreadTeams);

  if (dupeSpreadTeams.length) dupeSpreadTeams = randomize(dupeSpreadTeams);

  // console.log("dupeSpreadTeams after randomize", dupeSpreadTeams);

  return [...dupeSpreadTeams, ...nonDupeSpreadTeams];
};

const sort = (arr) => {
  let rank = arr.length;
  // console.log("rank", rank);

  const lockedAudit = arr.map((team) => team.locked);
  // console.log("lockedAudit", lockedAudit);

  if (lockedAudit.includes(true)) {
    // console.log("lockedAudit is true in sort func");

    const numOfTeams = arr.length + 1;
    // console.log("numOfTeams", numOfTeams);

    const ranksUsed = [];
    const lockedTeams = arr.filter((team) => team.locked);

    lockedTeams.forEach((team) => ranksUsed.push(team.rank));

    // console.log("rankUsed for locked teams", ranksUsed);

    const unLockedTeams = arr
      .filter((team) => !team.locked)
      .sort((a, b) => b.spread - a.spread)
      .map((team) => {
        while (ranksUsed.includes(rank)) rank--;

        ranksUsed.push(rank);
        team.rank = rank;
        rank--;

        return team;
      });

    // console.log("lockedTeams", lockedTeams);
    // console.log("unLockedTeams", unLockedTeams);

    arr = [...lockedTeams, ...unLockedTeams];
  } else {
    // console.log("lockedAudit is false in sort func");
    arr = arr
      .sort((a, b) => b.spread - a.spread)
      .map((team) => {
        team.rank = rank;
        rank--;
        return team;
      });
  }

  // console.log("arr after OG sort", arr);

  arr = sameSpreadAudit(arr);

  // console.log("arr after sameSpreadAudit", arr);

  return arr.sort((a, b) => b.rank - a.rank);
};

module.exports = { sort, setAudit, blankAuditFunc };
