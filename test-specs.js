const { expect } = require("chai");
const { sort, blankAuditFunc } = require("./src/store/funcs");

describe("sort func", () => {
  let teams, teams2Find, answer, teams2Audit, lockedAudit, setObj;

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
    setObj = {
      1: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      2: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      3: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      4: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      5: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      6: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      7: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      8: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      9: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      10: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      11: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      12: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      13: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      14: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      15: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
      16: {
        name: null,
        spread: null,
        rank: null,
        locked: false,
      },
    };
  });

  describe("blankAuditFunc func,", () => {
    it("calls out error, func returns true", () => {
      const answer = blankAuditFunc(setObj);

      expect(answer).to.equal(true);
    });

    it("confirms there are values - func returns false - 1", () => {
      setObj[1].name = "pack";

      const answer = blankAuditFunc(setObj);

      expect(answer).to.equal(false);
    });

    it("confirms there are values - func returns false - 2", () => {
      setObj[1].name = "pack";
      setObj[2].name = "bucs";
      setObj[2].name = "titans";

      setObj[1].spread = 9;
      setObj[5].spread = 9;
      setObj[8].spread = 9;

      const answer = blankAuditFunc(setObj);

      expect(answer).to.equal(false);
    });
  });

  describe("no locking", () => {
    describe("w/ no dupe spreads", () => {
      it("sorts 3 teams correctly", () => {
        teams2Find = ["bills", "colts", "titans"];

        teams = teams.filter((team) => teams2Find.includes(team.name));

        teams = teams.map((team) => {
          if (team.name === "bills") team.spread = "6";
          if (team.name === "colts") team.spread = "8";
          if (team.name === "titans") team.spread = "7";

          return team;
        });

        answer = sort(teams);

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].name).to.equal("colts");
        expect(answer[1].name).to.equal("titans");
        expect(answer[2].name).to.equal("bills");
      });

      it("sorts 5 teams correctly", () => {
        teams2Find = ["bills", "colts", "titans", "wash", "eagles"];

        teams = teams.filter((team) => teams2Find.includes(team.name));

        teams = teams.map((team) => {
          if (team.name === "bills") team.spread = "1";
          if (team.name === "colts") team.spread = "8";
          if (team.name === "titans") team.spread = "4";
          if (team.name === "wash") team.spread = "4.5";
          if (team.name === "eagles") team.spread = "3";

          return team;
        });

        answer = sort(teams);

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

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
          if (team.name === "bills") team.spread = "1";
          if (team.name === "colts") team.spread = "8";
          if (team.name === "titans") team.spread = "4";
          if (team.name === "wash") team.spread = "4.5";
          if (team.name === "eagles") team.spread = "3";
          if (team.name === "browns") team.spread = "1.5";
          if (team.name === "ravens") team.spread = "16";
          if (team.name === "chargers") team.spread = "15";
          if (team.name === "pack") team.spread = "14";
          if (team.name === "rams") team.spread = "13.5";

          return team;
        });

        answer = sort(teams);

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

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
          if (team.name === "bills") team.spread = "1";
          if (team.name === "colts") team.spread = "8";
          if (team.name === "titans") team.spread = "4";
          if (team.name === "wash") team.spread = "4.5";
          if (team.name === "eagles") team.spread = "3";
          if (team.name === "browns") team.spread = "1.5";
          if (team.name === "ravens") team.spread = "16";
          if (team.name === "chargers") team.spread = "15";
          if (team.name === "pack") team.spread = "12";
          if (team.name === "rams") team.spread = "13";
          if (team.name === "chiefs") team.spread = "7";
          if (team.name === "cards") team.spread = "14.5";
          if (team.name === "bucs") team.spread = "11";
          if (team.name === "pats") team.spread = "6";
          if (team.name === "saints") team.spread = "14";
          if (team.name === "vikings") team.spread = "13.5";

          return team;
        });

        answer = sort(teams);

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].name).to.equal("ravens");
        expect(answer[1].name).to.equal("chargers");
        expect(answer[2].name).to.equal("cards");
        expect(answer[3].name).to.equal("saints");
        expect(answer[4].name).to.equal("vikings");
        expect(answer[5].name).to.equal("rams");
        expect(answer[6].name).to.equal("pack");
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

    describe("w/ dupe spreads", () => {
      it("sorts 3 teams correctly", () => {
        teams2Find = ["bills", "colts", "titans"];

        teams = teams.filter((team) => teams2Find.includes(team.name));

        teams = teams.map((team) => {
          if (team.name === "bills") team.spread = 6;
          if (team.name === "colts") team.spread = 6;
          if (team.name === "titans") team.spread = 7;

          return team;
        });

        answer = sort(teams);

        teams2Audit = ["bills", "colts"];

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].name).to.equal("titans");
        expect(teams2Audit.includes(answer[1].name)).to.equal(true);
        expect(teams2Audit.includes(answer[2].name)).to.equal(true);
      });

      it("sorts 5 teams correctly", () => {
        teams2Find = ["bills", "colts", "titans", "wash", "eagles"];

        teams = teams.filter((team) => teams2Find.includes(team.name));

        teams = teams.map((team) => {
          if (team.name === "bills") team.spread = "1";
          if (team.name === "colts") team.spread = "8";
          if (team.name === "titans") team.spread = "4.5";
          if (team.name === "wash") team.spread = "4.5";
          if (team.name === "eagles") team.spread = "3";

          return team;
        });

        answer = sort(teams);

        teams2Audit = ["titans", "wash"];

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].name).to.equal("colts");
        expect(teams2Audit.includes(answer[1].name)).to.equal(true);
        expect(teams2Audit.includes(answer[2].name)).to.equal(true);
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
          if (team.name === "bills") team.spread = "1";
          if (team.name === "colts") team.spread = "8";
          if (team.name === "titans") team.spread = "3";
          if (team.name === "wash") team.spread = "4.5";
          if (team.name === "eagles") team.spread = "3";
          if (team.name === "browns") team.spread = "1.5";
          if (team.name === "ravens") team.spread = "16";
          if (team.name === "chargers") team.spread = "15";
          if (team.name === "pack") team.spread = "14";
          if (team.name === "rams") team.spread = "13.5";

          return team;
        });

        answer = sort(teams);

        teams2Audit = ["titans", "eagles"];

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].name).to.equal("ravens");
        expect(answer[1].name).to.equal("chargers");
        expect(answer[2].name).to.equal("pack");
        expect(answer[3].name).to.equal("rams");
        expect(answer[4].name).to.equal("colts");
        expect(answer[5].name).to.equal("wash");
        expect(teams2Audit.includes(answer[6].name)).to.equal(true);
        expect(teams2Audit.includes(answer[7].name)).to.equal(true);
        expect(answer[8].name).to.equal("browns");
        expect(answer[9].name).to.equal("bills");
      });

      it("sorts 16 teams correctly", () => {
        teams = teams.map((team) => {
          if (team.name === "bills") team.spread = "1";
          if (team.name === "colts") team.spread = "8";
          if (team.name === "titans") team.spread = "4";
          if (team.name === "wash") team.spread = "4";
          if (team.name === "eagles") team.spread = "3";
          if (team.name === "browns") team.spread = "1.5";
          if (team.name === "ravens") team.spread = "16";
          if (team.name === "chargers") team.spread = "15";
          if (team.name === "pack") team.spread = "14";
          if (team.name === "rams") team.spread = "13";
          if (team.name === "chiefs") team.spread = "7";
          if (team.name === "cards") team.spread = "14.5";
          if (team.name === "bucs") team.spread = "11";
          if (team.name === "pats") team.spread = "6";
          if (team.name === "saints") team.spread = "14";
          if (team.name === "vikings") team.spread = "13.5";

          return team;
        });

        answer = sort(teams);

        teams2Audit = ["saints", "pack", "titans", "wash"];

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

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
        expect(teams2Audit.includes(answer[11].name)).to.equal(true);
        expect(teams2Audit.includes(answer[12].name)).to.equal(true);
        expect(answer[13].name).to.equal("eagles");
        expect(answer[14].name).to.equal("browns");
        expect(answer[15].name).to.equal("bills");
      });
    });
  });

  describe("with locking", () => {
    describe("w/ no dupe spreads", () => {
      it("sorts 3 teams correctly", () => {
        teams2Find = ["bills", "colts", "titans"];

        teams = teams.filter((team) => teams2Find.includes(team.name));

        teams = teams.map((team) => {
          if (team.name === "bills") team.spread = "8";

          if (team.name === "colts") {
            team.spread = "7";
            team.locked = true;
            team.rank = 3;
          }

          if (team.name === "titans") team.spread = "6";

          return team;
        });

        answer = sort(teams);

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit[0]).to.equal(false);
        expect(lockedAudit[1]).to.equal(true);
        expect(lockedAudit[2]).to.equal(false);

        expect(answer[0].name).to.equal("bills");
        expect(answer[1].name).to.equal("titans");
        expect(answer[2].name).to.equal("colts");
      });

      // it("sorts 5 teams correctly", () => {
      //   teams2Find = ["bills", "colts", "titans", "wash", "eagles"];

      //   teams = teams.filter((team) => teams2Find.includes(team.name));

      //   teams = teams.map((team) => {
      //     if (team.name === "bills") team.spread = 1;
      //     if (team.name === "colts") team.spread = 8;
      //     if (team.name === "titans") team.spread = 4;
      //     if (team.name === "wash") team.spread = 4.5;
      //     if (team.name === "eagles") team.spread = 3;

      //     return team;
      //   });

      //   answer = sort(teams);

      //   lockedAudit = answer.map((user) => user.locked);

      //   expect(lockedAudit.includes(true)).to.equal(false);

      //   expect(answer[0].name).to.equal("colts");
      //   expect(answer[1].name).to.equal("wash");
      //   expect(answer[2].name).to.equal("titans");
      //   expect(answer[3].name).to.equal("eagles");
      //   expect(answer[4].name).to.equal("bills");
      // });

      {
      }

      // it("sorts 10 teams correctly", () => {
      //   teams2Find = [
      //     "bills",
      //     "colts",
      //     "titans",
      //     "wash",
      //     "eagles",
      //     "browns",
      //     "ravens",
      //     "chargers",
      //     "pack",
      //     "rams",
      //   ];

      //   teams = teams.filter((team) => teams2Find.includes(team.name));

      //   teams = teams.map((team) => {
      //     if (team.name === "bills") team.spread = 1;
      //     if (team.name === "colts") team.spread = 8;
      //     if (team.name === "titans") team.spread = 4;
      //     if (team.name === "wash") team.spread = 4.5;
      //     if (team.name === "eagles") team.spread = 3;
      //     if (team.name === "browns") team.spread = 1.5;
      //     if (team.name === "ravens") team.spread = 16;
      //     if (team.name === "chargers") team.spread = 15;
      //     if (team.name === "pack") team.spread = 14;
      //     if (team.name === "rams") team.spread = 13.5;

      //     return team;
      //   });

      //   answer = sort(teams);

      //   lockedAudit = answer.map((user) => user.locked);

      //   expect(lockedAudit.includes(true)).to.equal(false);

      //   expect(answer[0].name).to.equal("ravens");
      //   expect(answer[1].name).to.equal("chargers");
      //   expect(answer[2].name).to.equal("pack");
      //   expect(answer[3].name).to.equal("rams");
      //   expect(answer[4].name).to.equal("colts");
      //   expect(answer[5].name).to.equal("wash");
      //   expect(answer[6].name).to.equal("titans");
      //   expect(answer[7].name).to.equal("eagles");
      //   expect(answer[8].name).to.equal("browns");
      //   expect(answer[9].name).to.equal("bills");
      // });

      {
      }

      // it("sorts 16 teams correctly", () => {
      //   teams = teams.map((team) => {
      //     if (team.name === "bills") team.spread = 1;
      //     if (team.name === "colts") team.spread = 8;
      //     if (team.name === "titans") team.spread = 4;
      //     if (team.name === "wash") team.spread = 4.5;
      //     if (team.name === "eagles") team.spread = 3;
      //     if (team.name === "browns") team.spread = 1.5;
      //     if (team.name === "ravens") team.spread = 16;
      //     if (team.name === "chargers") team.spread = 15;
      //     if (team.name === "pack") team.spread = 12;
      //     if (team.name === "rams") team.spread = 13;
      //     if (team.name === "chiefs") team.spread = 7;
      //     if (team.name === "cards") team.spread = 14.5;
      //     if (team.name === "bucs") team.spread = 11;
      //     if (team.name === "pats") team.spread = 6;
      //     if (team.name === "saints") team.spread = 14;
      //     if (team.name === "vikings") team.spread = 13.5;

      //     return team;
      //   });

      //   answer = sort(teams);

      //   lockedAudit = answer.map((user) => user.locked);

      //   expect(lockedAudit.includes(true)).to.equal(false);

      //   expect(answer[0].name).to.equal("ravens");
      //   expect(answer[1].name).to.equal("chargers");
      //   expect(answer[2].name).to.equal("cards");
      //   expect(answer[3].name).to.equal("saints");
      //   expect(answer[4].name).to.equal("vikings");
      //   expect(answer[5].name).to.equal("rams");
      //   expect(answer[6].name).to.equal("pack");
      //   expect(answer[7].name).to.equal("bucs");
      //   expect(answer[8].name).to.equal("colts");
      //   expect(answer[9].name).to.equal("chiefs");
      //   expect(answer[10].name).to.equal("pats");
      //   expect(answer[11].name).to.equal("wash");
      //   expect(answer[12].name).to.equal("titans");
      //   expect(answer[13].name).to.equal("eagles");
      //   expect(answer[14].name).to.equal("browns");
      //   expect(answer[15].name).to.equal("bills");
      // });
    });

    // describe("w/ dupe spreads", () => {
    //   it("sorts 3 teams correctly", () => {
    //     teams2Find = ["bills", "colts", "titans"];

    //     teams = teams.filter((team) => teams2Find.includes(team.name));

    //     teams = teams.map((team) => {
    //       if (team.name === "bills") team.spread = 6;
    //       if (team.name === "colts") team.spread = 6;
    //       if (team.name === "titans") team.spread = 7;

    //       return team;
    //     });

    //     answer = sort(teams);

    //     teams2Audit = ["bills", "colts"];

    //     lockedAudit = answer.map((user) => user.locked);

    //     expect(lockedAudit.includes(true)).to.equal(false);

    //     expect(answer[0].name).to.equal("titans");
    //     expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //     expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //   });

    //   it("sorts 5 teams correctly", () => {
    //     teams2Find = ["bills", "colts", "titans", "wash", "eagles"];

    //     teams = teams.filter((team) => teams2Find.includes(team.name));

    //     teams = teams.map((team) => {
    //       if (team.name === "bills") team.spread = 1;
    //       if (team.name === "colts") team.spread = 8;
    //       if (team.name === "titans") team.spread = 4.5;
    //       if (team.name === "wash") team.spread = 4.5;
    //       if (team.name === "eagles") team.spread = 3;

    //       return team;
    //     });

    //     answer = sort(teams);

    //     teams2Audit = ["titans", "wash"];

    //     lockedAudit = answer.map((user) => user.locked);

    //     expect(lockedAudit.includes(true)).to.equal(false);

    //     expect(answer[0].name).to.equal("colts");
    //     expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //     expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //     expect(answer[3].name).to.equal("eagles");
    //     expect(answer[4].name).to.equal("bills");
    //   });

    //   it("sorts 10 teams correctly", () => {
    //     teams2Find = [
    //       "bills",
    //       "colts",
    //       "titans",
    //       "wash",
    //       "eagles",
    //       "browns",
    //       "ravens",
    //       "chargers",
    //       "pack",
    //       "rams",
    //     ];

    //     teams = teams.filter((team) => teams2Find.includes(team.name));

    //     teams = teams.map((team) => {
    //       if (team.name === "bills") team.spread = 1;
    //       if (team.name === "colts") team.spread = 8;
    //       if (team.name === "titans") team.spread = 3;
    //       if (team.name === "wash") team.spread = 4.5;
    //       if (team.name === "eagles") team.spread = 3;
    //       if (team.name === "browns") team.spread = 1.5;
    //       if (team.name === "ravens") team.spread = 16;
    //       if (team.name === "chargers") team.spread = 15;
    //       if (team.name === "pack") team.spread = 14;
    //       if (team.name === "rams") team.spread = 13.5;

    //       return team;
    //     });

    //     answer = sort(teams);

    //     teams2Audit = ["titans", "eagles"];

    //     lockedAudit = answer.map((user) => user.locked);

    //     expect(lockedAudit.includes(true)).to.equal(false);

    //     expect(answer[0].name).to.equal("ravens");
    //     expect(answer[1].name).to.equal("chargers");
    //     expect(answer[2].name).to.equal("pack");
    //     expect(answer[3].name).to.equal("rams");
    //     expect(answer[4].name).to.equal("colts");
    //     expect(answer[5].name).to.equal("wash");
    //     expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //     expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //     expect(answer[8].name).to.equal("browns");
    //     expect(answer[9].name).to.equal("bills");
    //   });

    //   it("sorts 16 teams correctly", () => {
    //     teams = teams.map((team) => {
    //       if (team.name === "bills") team.spread = 1;
    //       if (team.name === "colts") team.spread = 8;
    //       if (team.name === "titans") team.spread = 4;
    //       if (team.name === "wash") team.spread = 4;
    //       if (team.name === "eagles") team.spread = 3;
    //       if (team.name === "browns") team.spread = 1.5;
    //       if (team.name === "ravens") team.spread = 16;
    //       if (team.name === "chargers") team.spread = 15;
    //       if (team.name === "pack") team.spread = 14;
    //       if (team.name === "rams") team.spread = 13;
    //       if (team.name === "chiefs") team.spread = 7;
    //       if (team.name === "cards") team.spread = 14.5;
    //       if (team.name === "bucs") team.spread = 11;
    //       if (team.name === "pats") team.spread = 6;
    //       if (team.name === "saints") team.spread = 14;
    //       if (team.name === "vikings") team.spread = 13.5;

    //       return team;
    //     });

    //     answer = sort(teams);

    //     teams2Audit = ["saints", "pack", "titans", "wash"];

    //     lockedAudit = answer.map((user) => user.locked);

    //     expect(lockedAudit.includes(true)).to.equal(false);

    //     expect(answer[0].name).to.equal("ravens");
    //     expect(answer[1].name).to.equal("chargers");
    //     expect(answer[2].name).to.equal("cards");
    //     expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //     expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //     expect(answer[5].name).to.equal("vikings");
    //     expect(answer[6].name).to.equal("rams");
    //     expect(answer[7].name).to.equal("bucs");
    //     expect(answer[8].name).to.equal("colts");
    //     expect(answer[9].name).to.equal("chiefs");
    //     expect(answer[10].name).to.equal("pats");
    //     expect(teams2Audit.includes(answer[11].name)).to.equal(true);
    //     expect(teams2Audit.includes(answer[12].name)).to.equal(true);
    //     expect(answer[13].name).to.equal("eagles");
    //     expect(answer[14].name).to.equal("browns");
    //     expect(answer[15].name).to.equal("bills");
    //   });
    // });
  });

  //   {
  //   }

  //   // it("sorts 5 teams correctly", () => {
  //   //   const fiveTeams = [
  //   //     {
  //   //       id: 1,
  //   //       name: "hawks",
  //   //       spread: 8,
  //   //       rank: 1,
  //   //       locked: true,
  //   //     },
  //   //     {
  //   //       id: 2,
  //   //       name: "vikings",
  //   //       spread: 7,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //     {
  //   //       id: 3,
  //   //       name: "lions",
  //   //       spread: 6,
  //   //       rank: 5,
  //   //       locked: true,
  //   //     },
  //   //     {
  //   //       id: 4,
  //   //       name: "bills",
  //   //       spread: 5,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //     {
  //   //       id: 5,
  //   //       name: "pats",
  //   //       spread: 4,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //   ];
  //   // });

  //   {
  //   }

  //   // it("sorts 10 teams correctly", () => {
  //   //   const tenTeams = [
  //   //     {
  //   //       id: 9,
  //   //       name: "colts",
  //   //       spread: 16,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //     {
  //   //       id: 10,
  //   //       name: "steelers",
  //   //       spread: 15,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //     {
  //   //       id: 11,
  //   //       name: "browns",
  //   //       spread: 14,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //     {
  //   //       id: 12,
  //   //       name: "bears",
  //   //       spread: 13,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //     {
  //   //       id: 13,
  //   //       name: "pack",
  //   //       spread: 12,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //     {
  //   //       id: 14,
  //   //       name: "fins",
  //   //       spread: 10.5,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //     {
  //   //       id: 15,
  //   //       name: "chiefs",
  //   //       spread: 10,
  //   //       rank: 9,
  //   //       locked: true,
  //   //     },
  //   //     {
  //   //       id: 16,
  //   //       name: "chargers",
  //   //       spread: 9.5,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },

  //   //     {
  //   //       id: 1,
  //   //       name: "hawks",
  //   //       spread: 8,
  //   //       rank: 6,
  //   //       locked: true,
  //   //     },
  //   //     {
  //   //       id: 2,
  //   //       name: "vikings",
  //   //       spread: 7,
  //   //       rank: null,
  //   //       locked: false,
  //   //     },
  //   //   ];
  //   // });

  //   {
  //   }

  //   // it("sorts 16 teams correctly", () => {
  //   //   const sixteenTeams = [
  //   //     {
  //   //       id: 1,
  //   //       name: "chiefs",
  //   //       spread: "8",
  //   //       rank: 14,
  //   //       locked: true,
  //   //       createdAt: "2022-01-25T18:49:16.256Z",
  //   //       updatedAt: "2022-01-25T18:49:16.256Z",
  //   //     },
  //   //     {
  //   //       id: 2,
  //   //       name: "eagles",
  //   //       spread: "8",
  //   //       rank: 5,
  //   //       locked: true,
  //   //       createdAt: "2022-01-25T18:49:16.263Z",
  //   //       updatedAt: "2022-01-25T18:49:16.263Z",
  //   //     },
  //   //     {
  //   //       id: 3,
  //   //       name: "ravens",
  //   //       spread: "3.8",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.264Z",
  //   //       updatedAt: "2022-01-25T18:49:16.264Z",
  //   //     },
  //   //     {
  //   //       id: 4,
  //   //       name: "browns",
  //   //       spread: "5.6",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.265Z",
  //   //       updatedAt: "2022-01-25T18:49:16.265Z",
  //   //     },
  //   //     {
  //   //       id: 5,
  //   //       name: "pack",
  //   //       spread: "3",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.267Z",
  //   //       updatedAt: "2022-01-25T18:49:16.267Z",
  //   //     },
  //   //     {
  //   //       id: 6,
  //   //       name: "titans",
  //   //       spread: "10.5",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.269Z",
  //   //       updatedAt: "2022-01-25T18:49:16.269Z",
  //   //     },
  //   //     {
  //   //       id: 7,
  //   //       name: "colts",
  //   //       spread: "14.5",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.271Z",
  //   //       updatedAt: "2022-01-25T18:49:16.271Z",
  //   //     },
  //   //     {
  //   //       id: 8,
  //   //       name: "vikings",
  //   //       spread: "4",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.272Z",
  //   //       updatedAt: "2022-01-25T18:49:16.272Z",
  //   //     },
  //   //     {
  //   //       id: 9,
  //   //       name: "wash",
  //   //       spread: "7",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.273Z",
  //   //       updatedAt: "2022-01-25T18:49:16.273Z",
  //   //     },
  //   //     {
  //   //       id: 10,
  //   //       name: "saints",
  //   //       spread: "3.5",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.274Z",
  //   //       updatedAt: "2022-01-25T18:49:16.274Z",
  //   //     },
  //   //     {
  //   //       id: 11,
  //   //       name: "bills",
  //   //       spread: "16.5",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.275Z",
  //   //       updatedAt: "2022-01-25T18:49:16.275Z",
  //   //     },
  //   //     {
  //   //       id: 12,
  //   //       name: "pats",
  //   //       spread: "6",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.277Z",
  //   //       updatedAt: "2022-01-25T18:49:16.277Z",
  //   //     },
  //   //     {
  //   //       id: 13,
  //   //       name: "bucs",
  //   //       spread: "9",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.278Z",
  //   //       updatedAt: "2022-01-25T18:49:16.278Z",
  //   //     },
  //   //     {
  //   //       id: 14,
  //   //       name: "cards",
  //   //       spread: "5.5",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.280Z",
  //   //       updatedAt: "2022-01-25T18:49:16.280Z",
  //   //     },
  //   //     {
  //   //       id: 15,
  //   //       name: "rams",
  //   //       spread: "3.6",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.281Z",
  //   //       updatedAt: "2022-01-25T18:49:16.281Z",
  //   //     },
  //   //     {
  //   //       id: 16,
  //   //       name: "chargers",
  //   //       spread: "2",
  //   //       rank: null,
  //   //       locked: false,
  //   //       createdAt: "2022-01-25T18:49:16.282Z",
  //   //       updatedAt: "2022-01-25T18:49:16.282Z",
  //   //     },
  //   //   ];

  //   // });
});
