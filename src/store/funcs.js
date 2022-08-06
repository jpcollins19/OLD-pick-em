const sort = (arr) => {
  const spreadOrderArray = arr
    .reduce((a, obj) => {
      a.push(obj.spread);
      return a;
    }, [])
    .sort((a, b) => b - a);

  const spreadWTeamsAsValues = arr.reduce((a, obj) => {
    if (!a.hasOwnProperty(obj.spread)) {
      a[obj.spread] = [obj.name];
    } else {
      a[obj.spread].push(obj.name);
    }
    return a;
  }, {});

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

  let currentRank = arr.length;
  const onHoldObjects = [];

  return spreadOrderArray
    .reduce((a, spread) => {
      while (rankNumbersUsed.includes(ranking)) {
        ranking--;
      }

      if (!spreadsUsed.includes(spread)) {
        const teamArrayBasedOnSpread = spreadWTeamsAsValues[spread];

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

          const teamOrder = sameSpreadCalc(teamListing);

          Object.values(teamOrder).map((team) => {
            const teamObjInfo = arr.filter(
              (obj) => obj.name === team && !obj.locked
            )[0];

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
