const createCountObj = (arr, key) => {
  return arr.reduce((a, obj) => {
    a[obj[key]] ? a[obj[key]]++ : (a[obj[key]] = 1);
    return a;
  }, {});
};

const setAudit = (arr) => {
  console.log("arr", arr);

  const set = new Set(arr);

  console.log("set", set);

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

  let rank = arr[0].rank;
  // console.log("rank", rank);

  let onTeam = 0;

  const numOfTeams = arr.length;
  let counter = numOfTeams;

  const randomizedObj = {};

  while (counter > 0) {
    let random = Math.ceil(Math.random() * numOfTeams);

    if (!randomizedObj[random]) {
      randomizedObj[random] = arr[onTeam].name;
      counter--;
      onTeam++;
    }
  }

  // console.log("randomizedObj", randomizedObj);

  arr = Object.values(randomizedObj).map((teamName) => {
    teamName = arr.find((team) => team.name === teamName);

    teamName.rank = rank;
    rank++;
    return teamName;
  });

  // console.log("newTeamOrder", arr);

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
  let rank = 1;

  const lockedAudit = arr.map((team) => team.locked);

  // console.log("lockedAudit", lockedAudit);

  if (lockedAudit.includes(true)) {
    const numOfTeams = arr.length;

    let rankUsed = [];

    let newRank = [];

    let rank = 1;

    arr
      .filter((team) => team.locked)
      .forEach((team) => {
        rankUsed.push(team.rank);
        newRank.push(team);
      });

    console.log("rankUsed", rankUsed);

    console.log("newRank", newRank);
  } else {
    arr = arr
      .sort((a, b) => b.spread - a.spread)
      .map((team) => {
        team.rank = rank;
        rank++;
        return team;
      });

    // console.log("arr after OG spread sort", arr);
  }

  arr = sameSpreadAudit(arr);

  // console.log("arr after sameSpreadAudit", arr);

  return arr.sort((a, b) => a.rank - b.rank);

  // console.log("nugget", sameSpreadCalc(arr));

  // const spreadsUsed = [];
  // const rankNumbersUsed = [];

  // let reduceArrayAnswer = [];
  // let ranking = arr.length;

  // arr
  //   .filter((obj) => obj.locked === true)
  //   .map((obj) => {
  //     const teamObj = {};

  //     teamObj.rank = obj.rank;
  //     teamObj.name = obj.name;
  //     teamObj.spread = obj.spread;

  //     reduceArrayAnswer.push(teamObj);
  //     rankNumbersUsed.push(obj.rank);
  //   });

  // let currentRank = arr.length;
  // const onHoldObjects = [];

  // return spreadOrderArray
  //   .reduce((a, spread) => {
  //     while (rankNumbersUsed.includes(ranking)) {
  //       ranking--;
  //     }

  //     if (!spreadsUsed.includes(spread)) {
  //       const teamArrayBasedOnSpread = spreadWTeamsAsArr[spread];
  //       // [ 'hawks' ] || [ 'hawks', 'vikings' ]

  //       if (teamArrayBasedOnSpread.length === 1) {
  //         const teamObj = arr.filter(
  //           (obj) => obj.name === teamArrayBasedOnSpread[0]
  //         )[0];

  //         if (!teamObj.locked) {
  //           spreadsUsed.push(spread);
  //           const teamObj2Submit = {};
  //           teamObj2Submit.rank = ranking;
  //           teamObj2Submit.name = teamArrayBasedOnSpread[0];
  //           teamObj2Submit.spread = spread;
  //           a.push(teamObj2Submit);
  //           rankNumbersUsed.push(ranking);
  //           ranking--;
  //         }
  //       } else {
  //         spreadsUsed.push(spread);

  //         const teamListing = teamArrayBasedOnSpread.map((team) => {
  //           const teamObj = arr.filter((obj) => obj.name === team);

  //           return teamObj[0];
  //         });

  //         const teamOrder = sameSpreadCalc(teamListing);

  //         Object.values(teamOrder).map((team) => {
  //           const teamObjInfo = arr.filter(
  //             (obj) => obj.name === team && !obj.locked
  //           )[0];

  //           if (teamObjInfo !== undefined) {
  //             const teamObj2Submit = {};

  //             teamObj2Submit.rank = ranking;
  //             teamObj2Submit.name = teamObjInfo.name;
  //             teamObj2Submit.spread = spread;
  //             a.push(teamObj2Submit);
  //             rankNumbersUsed.push(ranking);
  //             ranking--;
  //           }
  //         });
  //       }
  //     }

  //     return a;
  //   }, reduceArrayAnswer)
  //   .sort((a, b) => b.rank - a.rank);
};

module.exports = { sort, setAudit, blankAuditFunc };
