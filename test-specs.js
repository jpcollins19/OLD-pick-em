const { expect } = require("chai");
const { sort } = require("./src/store/funcs");

describe("sort func", () => {
  let teams, teams2Find, answer, teams2Audit;

  beforeEach(() => {
    teams = [
      {
        id: 1,
        name: "chiefs",
        spread: "8",
        rank: 14,
        locked: false,
        createdAt: "2022-08-06T15:15:30.374Z",
        updatedAt: "2022-08-06T15:15:30.374Z",
      },
      {
        id: 2,
        name: "eagles",
        spread: "8",
        rank: 5,
        locked: false,
        createdAt: "2022-08-06T15:15:30.382Z",
        updatedAt: "2022-08-06T15:15:30.382Z",
      },
      {
        id: 3,
        name: "ravens",
        spread: "3.5",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.385Z",
        updatedAt: "2022-08-06T15:15:30.385Z",
      },
      {
        id: 4,
        name: "browns",
        spread: "5.5",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.388Z",
        updatedAt: "2022-08-06T15:15:30.388Z",
      },
      {
        id: 5,
        name: "pack",
        spread: "3",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.390Z",
        updatedAt: "2022-08-06T15:15:30.390Z",
      },
      {
        id: 6,
        name: "titans",
        spread: "10.5",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.393Z",
        updatedAt: "2022-08-06T15:15:30.393Z",
      },
      {
        id: 7,
        name: "colts",
        spread: "14.5",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.395Z",
        updatedAt: "2022-08-06T15:15:30.395Z",
      },
      {
        id: 8,
        name: "vikings",
        spread: "4",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.397Z",
        updatedAt: "2022-08-06T15:15:30.397Z",
      },
      {
        id: 9,
        name: "wash",
        spread: "7",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.398Z",
        updatedAt: "2022-08-06T15:15:30.398Z",
      },
      {
        id: 10,
        name: "saints",
        spread: "3.5",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.402Z",
        updatedAt: "2022-08-06T15:15:30.402Z",
      },
      {
        id: 11,
        name: "bills",
        spread: "16.5",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.405Z",
        updatedAt: "2022-08-06T15:15:30.405Z",
      },
      {
        id: 12,
        name: "pats",
        spread: "6",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.407Z",
        updatedAt: "2022-08-06T15:15:30.407Z",
      },
      {
        id: 13,
        name: "bucs",
        spread: "9",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.413Z",
        updatedAt: "2022-08-06T15:15:30.413Z",
      },
      {
        id: 14,
        name: "cards",
        spread: "5.5",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.415Z",
        updatedAt: "2022-08-06T15:15:30.415Z",
      },
      {
        id: 15,
        name: "rams",
        spread: "3.5",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.416Z",
        updatedAt: "2022-08-06T15:15:30.416Z",
      },
      {
        id: 16,
        name: "chargers",
        spread: "3",
        rank: null,
        locked: false,
        createdAt: "2022-08-06T15:15:30.419Z",
        updatedAt: "2022-08-06T15:15:30.419Z",
      },
    ];
  });

  describe("no locking", () => {
    it("sorts 3 teams correctly", () => {
      teams2Find = ["bills", "colts", "titans"];

      teams = teams.filter((team) => teams2Find.includes(team.name));

      teams = teams.map((team) => {
        if (team.name === "bills") team.spread = 6;
        if (team.name === "colts") team.spread = 8;
        if (team.name === "titans") team.spread = 7;

        return team;
      });

      answer = sort(teams);

      expect(answer[0].name).to.equal("colts");
      expect(answer[1].name).to.equal("titans");
      expect(answer[2].name).to.equal("bills");
    });

    it("sorts 5 teams correctly", () => {
      teams2Find = ["bills", "colts", "titans", "wash", "eagles"];

      teams = teams.filter((team) => teams2Find.includes(team.name));

      teams = teams.map((team) => {
        if (team.name === "bills") team.spread = 1;
        if (team.name === "colts") team.spread = 8;
        if (team.name === "titans") team.spread = 4;
        if (team.name === "wash") team.spread = 4.5;
        if (team.name === "eagles") team.spread = 3;

        return team;
      });

      answer = sort(teams);

      expect(answer[0].name).to.equal("colts");
      expect(answer[1].name).to.equal("wash");
      expect(answer[2].name).to.equal("titans");
      expect(answer[3].name).to.equal("eagles");
      expect(answer[4].name).to.equal("bills");
    });

    it("sorts 10 teams correctly", () => {
      teams2Find = [
        "bills",
        "colts",
        "titans",
        "wash",
        "eagles",
        "browns",
        "ravens",
        "chargers",
        "pack",
        "rams",
      ];

      teams = teams.filter((team) => teams2Find.includes(team.name));

      teams = teams.map((team) => {
        if (team.name === "bills") team.spread = 1;
        if (team.name === "colts") team.spread = 8;
        if (team.name === "titans") team.spread = 4;
        if (team.name === "wash") team.spread = 4.5;
        if (team.name === "eagles") team.spread = 3;
        if (team.name === "browns") team.spread = 1.5;
        if (team.name === "ravens") team.spread = 16;
        if (team.name === "chargers") team.spread = 15;
        if (team.name === "pack") team.spread = 14;
        if (team.name === "rams") team.spread = 13.5;

        return team;
      });

      answer = sort(teams);

      expect(answer[0].name).to.equal("ravens");
      expect(answer[1].name).to.equal("chargers");
      expect(answer[2].name).to.equal("pack");
      expect(answer[3].name).to.equal("rams");
      expect(answer[4].name).to.equal("colts");
      expect(answer[5].name).to.equal("wash");
      expect(answer[6].name).to.equal("titans");
      expect(answer[7].name).to.equal("eagles");
      expect(answer[8].name).to.equal("browns");
      expect(answer[9].name).to.equal("bills");
    });

    it("sorts 16 teams correctly", () => {
      teams = teams.map((team) => {
        if (team.name === "bills") team.spread = 1;
        if (team.name === "colts") team.spread = 8;
        if (team.name === "titans") team.spread = 4;
        if (team.name === "wash") team.spread = 4.5;
        if (team.name === "eagles") team.spread = 3;
        if (team.name === "browns") team.spread = 1.5;
        if (team.name === "ravens") team.spread = 16;
        if (team.name === "chargers") team.spread = 15;
        if (team.name === "pack") team.spread = 14;
        if (team.name === "rams") team.spread = 13;
        if (team.name === "chiefs") team.spread = 7;
        if (team.name === "cards") team.spread = 14.5;
        if (team.name === "bucs") team.spread = 11;
        if (team.name === "pats") team.spread = 6;
        if (team.name === "saints") team.spread = 14;
        if (team.name === "vikings") team.spread = 13.5;

        return team;
      });

      answer = sort(teams);

      teams2Audit = ["saints", "pack"];

      expect(answer[0].name).to.equal("ravens");
      expect(answer[1].name).to.equal("chargers");
      expect(answer[2].name).to.equal("cards");
      expect(teams2Audit.includes(answer[3].name)).to.equal(true);
      expect(teams2Audit.includes(answer[4].name)).to.equal(true);
      expect(answer[5].name).to.equal("vikings");
      expect(answer[6].name).to.equal("rams");
      expect(answer[7].name).to.equal("bucs");
      expect(answer[8].name).to.equal("colts");
      expect(answer[9].name).to.equal("chiefs");
      expect(answer[10].name).to.equal("pats");
      expect(answer[11].name).to.equal("wash");
      expect(answer[12].name).to.equal("titans");
      expect(answer[13].name).to.equal("eagles");
      expect(answer[14].name).to.equal("browns");
      expect(answer[15].name).to.equal("bills");
    });
  });

  describe("with locking", () => {
    it("sorts 3 teams correctly", () => {
      const threeTeams = [
        {
          id: 1,
          name: "hawks",
          spread: 8,
          rank: null,
          locked: false,
        },
        {
          id: 2,
          name: "vikings",
          spread: 7,
          rank: 3,
          locked: true,
        },
        {
          id: 3,
          name: "lions",
          spread: 6,
          rank: null,
          locked: false,
        },
      ];

      const answer = sort(threeTeams);

      const ranks = [];
      const teams = [];

      for (let i = 0; i < answer.length; i++) {
        ranks.push(answer[i].rank);
        teams.push(answer[i].name);
      }

      expect(ranks[0]).to.equal(3);
      expect(teams[0]).to.equal("vikings");
      expect(ranks[1]).to.equal(2);
      expect(teams[1]).to.equal("hawks");
      expect(ranks[2]).to.equal(1);
      expect(teams[2]).to.equal("lions");
    });

    {
    }

    // it("sorts 5 teams correctly", () => {
    //   const fiveTeams = [
    //     {
    //       id: 1,
    //       name: "hawks",
    //       spread: 8,
    //       rank: 1,
    //       locked: true,
    //     },
    //     {
    //       id: 2,
    //       name: "vikings",
    //       spread: 7,
    //       rank: null,
    //       locked: false,
    //     },
    //     {
    //       id: 3,
    //       name: "lions",
    //       spread: 6,
    //       rank: 5,
    //       locked: true,
    //     },
    //     {
    //       id: 4,
    //       name: "bills",
    //       spread: 5,
    //       rank: null,
    //       locked: false,
    //     },
    //     {
    //       id: 5,
    //       name: "pats",
    //       spread: 4,
    //       rank: null,
    //       locked: false,
    //     },
    //   ];
    // });

    {
    }

    // it("sorts 10 teams correctly", () => {
    //   const tenTeams = [
    //     {
    //       id: 9,
    //       name: "colts",
    //       spread: 16,
    //       rank: null,
    //       locked: false,
    //     },
    //     {
    //       id: 10,
    //       name: "steelers",
    //       spread: 15,
    //       rank: null,
    //       locked: false,
    //     },
    //     {
    //       id: 11,
    //       name: "browns",
    //       spread: 14,
    //       rank: null,
    //       locked: false,
    //     },
    //     {
    //       id: 12,
    //       name: "bears",
    //       spread: 13,
    //       rank: null,
    //       locked: false,
    //     },
    //     {
    //       id: 13,
    //       name: "pack",
    //       spread: 12,
    //       rank: null,
    //       locked: false,
    //     },
    //     {
    //       id: 14,
    //       name: "fins",
    //       spread: 10.5,
    //       rank: null,
    //       locked: false,
    //     },
    //     {
    //       id: 15,
    //       name: "chiefs",
    //       spread: 10,
    //       rank: 9,
    //       locked: true,
    //     },
    //     {
    //       id: 16,
    //       name: "chargers",
    //       spread: 9.5,
    //       rank: null,
    //       locked: false,
    //     },

    //     {
    //       id: 1,
    //       name: "hawks",
    //       spread: 8,
    //       rank: 6,
    //       locked: true,
    //     },
    //     {
    //       id: 2,
    //       name: "vikings",
    //       spread: 7,
    //       rank: null,
    //       locked: false,
    //     },
    //   ];
    // });

    {
    }

    // it("sorts 16 teams correctly", () => {
    //   const sixteenTeams = [
    //     {
    //       id: 1,
    //       name: "chiefs",
    //       spread: "8",
    //       rank: 14,
    //       locked: true,
    //       createdAt: "2022-01-25T18:49:16.256Z",
    //       updatedAt: "2022-01-25T18:49:16.256Z",
    //     },
    //     {
    //       id: 2,
    //       name: "eagles",
    //       spread: "8",
    //       rank: 5,
    //       locked: true,
    //       createdAt: "2022-01-25T18:49:16.263Z",
    //       updatedAt: "2022-01-25T18:49:16.263Z",
    //     },
    //     {
    //       id: 3,
    //       name: "ravens",
    //       spread: "3.8",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.264Z",
    //       updatedAt: "2022-01-25T18:49:16.264Z",
    //     },
    //     {
    //       id: 4,
    //       name: "browns",
    //       spread: "5.6",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.265Z",
    //       updatedAt: "2022-01-25T18:49:16.265Z",
    //     },
    //     {
    //       id: 5,
    //       name: "pack",
    //       spread: "3",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.267Z",
    //       updatedAt: "2022-01-25T18:49:16.267Z",
    //     },
    //     {
    //       id: 6,
    //       name: "titans",
    //       spread: "10.5",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.269Z",
    //       updatedAt: "2022-01-25T18:49:16.269Z",
    //     },
    //     {
    //       id: 7,
    //       name: "colts",
    //       spread: "14.5",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.271Z",
    //       updatedAt: "2022-01-25T18:49:16.271Z",
    //     },
    //     {
    //       id: 8,
    //       name: "vikings",
    //       spread: "4",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.272Z",
    //       updatedAt: "2022-01-25T18:49:16.272Z",
    //     },
    //     {
    //       id: 9,
    //       name: "wash",
    //       spread: "7",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.273Z",
    //       updatedAt: "2022-01-25T18:49:16.273Z",
    //     },
    //     {
    //       id: 10,
    //       name: "saints",
    //       spread: "3.5",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.274Z",
    //       updatedAt: "2022-01-25T18:49:16.274Z",
    //     },
    //     {
    //       id: 11,
    //       name: "bills",
    //       spread: "16.5",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.275Z",
    //       updatedAt: "2022-01-25T18:49:16.275Z",
    //     },
    //     {
    //       id: 12,
    //       name: "pats",
    //       spread: "6",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.277Z",
    //       updatedAt: "2022-01-25T18:49:16.277Z",
    //     },
    //     {
    //       id: 13,
    //       name: "bucs",
    //       spread: "9",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.278Z",
    //       updatedAt: "2022-01-25T18:49:16.278Z",
    //     },
    //     {
    //       id: 14,
    //       name: "cards",
    //       spread: "5.5",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.280Z",
    //       updatedAt: "2022-01-25T18:49:16.280Z",
    //     },
    //     {
    //       id: 15,
    //       name: "rams",
    //       spread: "3.6",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.281Z",
    //       updatedAt: "2022-01-25T18:49:16.281Z",
    //     },
    //     {
    //       id: 16,
    //       name: "chargers",
    //       spread: "2",
    //       rank: null,
    //       locked: false,
    //       createdAt: "2022-01-25T18:49:16.282Z",
    //       updatedAt: "2022-01-25T18:49:16.282Z",
    //     },
    //   ];

    // });
  });
});
