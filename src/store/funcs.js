const sort = (arr) => {
  const spreadOrderArray = arr
    .reduce((a, obj) => {
      a.push(obj.spread);
      return a;
    }, [])
    .sort((a, b) => b - a);

  //[16, 15,  14, 13.5, 13, 11, 10, 9, 8.5, 7, 6.5, 5, 4.5, 3, 2, 1]

  // console.log(`joe`);
  // console.log(spreadOrderArray);

  const spreadWTeamsAsValues = arr.reduce((a, obj) => {
    if (!a.hasOwnProperty(obj.spread)) {
      a[obj.spread] = [obj.name];
    } else {
      a[obj.spread].push(obj.name);
    }
    return a;
  }, {});

  // console.log(`joe`);
  // console.log(spreadWTeamsAsValues);

  // {
  //   '1': [ 'giants' ],
  //   '2': [ 'ravens' ],
  //   '3': [ 'bengals' ],
  //   '5': [ 'bills' ],
  //   '7': [ 'vikings' ],
  //   '9': [ 'chargers' ],
  //   '10': [ 'bills' ],
  //   '11': [ 'fins' ],
  //   '13': [ 'pack' ],
  //   '14': [ 'browns' ],
  //   '15': [ 'steelers' ],
  //   '16': [ 'colts' ],
  //   '8.5': [ 'hawks' ],
  //   '6.5': [ 'lions' ],
  //   '4.5': [ 'pats' ],
  //   '13.5': [ 'bears' ]
  // }

  const sameSpreadCalc = (arr) => {
    const numOfTeams = arr.length;
    let counter = numOfTeams;
    const answer = {};
    let nextTeamUpIndex = arr.length - 1;
    while (counter > 0) {
      let random = Math.ceil(Math.random() * numOfTeams);

      if (!answer.hasOwnProperty([random])) {
        answer[random] = arr[nextTeamUpIndex].name;
        nextTeamUpIndex--;
        counter--;
      }
    }
    return answer;
    // { '1': 'lions', '2': 'steelers', '3': 'bears', '4': 'hawks' }
  };

  const spreadsUsed = [];
  const rankNumbersUsed = [];
  // const teamsIdsAccountedFor = [];
  let reduceArrayAnswer = [];
  let ranking = arr.length;

  arr
    .filter((obj) => obj.locked === true)
    .map((obj) => {
      const teamObj = {};

      teamObj.rank = obj.rank;
      teamObj.name = obj.name;
      teamObj.spread = obj.spread;

      reduceArrayAnswer.push(teamObj);
      rankNumbersUsed.push(obj.rank);
    });

  // console.log(`joe`);
  // console.log(reduceArrayAnswer);

  let currentRank = arr.length;
  const onHoldObjects = [];

  return spreadOrderArray
    .reduce((a, spread) => {
      while (rankNumbersUsed.includes(ranking)) {
        ranking--;
      }

      if (!spreadsUsed.includes(spread)) {
        const teamArrayBasedOnSpread = spreadWTeamsAsValues[spread];
        // [ 'hawks' ] || [ 'hawks', 'vikings' ]

        if (teamArrayBasedOnSpread.length === 1) {
          const teamObj = arr.filter(
            (obj) => obj.name === teamArrayBasedOnSpread[0]
          )[0];

          if (!teamObj.locked) {
            spreadsUsed.push(spread);
            const teamObj2Submit = {};
            teamObj2Submit.rank = ranking;
            teamObj2Submit.name = teamArrayBasedOnSpread[0];
            teamObj2Submit.spread = spread;
            a.push(teamObj2Submit);
            rankNumbersUsed.push(ranking);
            ranking--;
          }
        } else {
          spreadsUsed.push(spread);

          const teamListing = teamArrayBasedOnSpread.map((team) => {
            const teamObj = arr.filter((obj) => obj.name === team);

            return teamObj[0];
          });

          // [
          //   { id: 1, name: 'hawks', spread: 8, rank: null, locked: false },
          //   { id: 2, name: 'vikings', spread: 8, rank: null, locked: false }
          // ]

          const teamOrder = sameSpreadCalc(teamListing);
          // { '1': 'vikings', '2': 'hawks' }

          Object.values(teamOrder).map((team) => {
            const teamObjInfo = arr.filter(
              (obj) => obj.name === team && !obj.locked
            )[0];

            // console.log(`joe`);
            // console.log(teamObjInfo);
            //{ id: 1, name: 'hawks', spread: 8, rank: null, locked: false }

            if (teamObjInfo !== undefined) {
              const teamObj2Submit = {};

              teamObj2Submit.rank = ranking;
              teamObj2Submit.name = teamObjInfo.name;
              teamObj2Submit.spread = spread;
              a.push(teamObj2Submit);
              rankNumbersUsed.push(ranking);
              ranking--;
            }
          });
        }
      }

      return a;
    }, reduceArrayAnswer)
    .sort((a, b) => b.rank - a.rank);
};

module.exports = { sort };
