const { expect } = require("chai");
const { sort } = require("./funcs.js");

describe("sort func, no locking", () => {
  it("sorts 3 teams correctly", () => {
    const threeTeams = [
      {
        id: 3,
        name: "lions",
        spread: 6,
      },
      {
        id: 1,
        name: "hawks",
        spread: 8,
      },
      {
        id: 2,
        name: "vikings",
        spread: 7,
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
    expect(teams[0]).to.equal("hawks");
    expect(ranks[1]).to.equal(2);
    expect(teams[1]).to.equal("vikings");
    expect(ranks[2]).to.equal(1);
    expect(teams[2]).to.equal("lions");
  });

  it("sorts 5 teams correctly", () => {
    const fiveTeams = [
      {
        id: 3,
        name: "lions",
        spread: 1,
      },
      {
        id: 1,
        name: "hawks",
        spread: 8,
      },
      {
        id: 2,
        name: "vikings",
        spread: 4,
      },
      {
        id: 5,
        name: "pats",
        spread: 4.5,
      },
      {
        id: 6,
        name: "bengals",
        spread: 3,
      },
    ];

    const answer = sort(fiveTeams);

    const ranks = [];
    const teams = [];

    for (let i = 0; i < answer.length; i++) {
      ranks.push(answer[i].rank);
      teams.push(answer[i].name);
    }

    expect(ranks[0]).to.equal(5);
    expect(teams[0]).to.equal("hawks");
    expect(ranks[1]).to.equal(4);
    expect(teams[1]).to.equal("pats");
    expect(ranks[2]).to.equal(3);
    expect(teams[2]).to.equal("vikings");
    expect(ranks[3]).to.equal(2);
    expect(teams[3]).to.equal("bengals");
    expect(ranks[4]).to.equal(1);
    expect(teams[4]).to.equal("lions");
  });

  it("sorts 10 teams correctly", () => {
    const tenTeams = [
      {
        id: 3,
        name: "lions",
        spread: 1,
      },
      {
        id: 1,
        name: "hawks",
        spread: 8,
      },
      {
        id: 2,
        name: "vikings",
        spread: 4,
      },
      {
        id: 5,
        name: "pats",
        spread: 4.5,
      },
      {
        id: 6,
        name: "bengals",
        spread: 3,
      },
      {
        id: 8,
        name: "giants",
        spread: 1.5,
      },
      {
        id: 9,
        name: "colts",
        spread: 16,
      },
      {
        id: 10,
        name: "steelers",
        spread: 15,
      },
      {
        id: 11,
        name: "browns",
        spread: 14,
      },
      {
        id: 12,
        name: "bears",
        spread: 13.5,
      },
    ];

    const answer = sort(tenTeams);

    const ranks = [];
    const teams = [];

    for (let i = 0; i < answer.length; i++) {
      ranks.push(answer[i].rank);
      teams.push(answer[i].name);
    }

    expect(ranks[0]).to.equal(10);
    expect(teams[0]).to.equal("colts");
    expect(ranks[1]).to.equal(9);
    expect(teams[1]).to.equal("steelers");
    expect(ranks[2]).to.equal(8);
    expect(teams[2]).to.equal("browns");
    expect(ranks[3]).to.equal(7);
    expect(teams[3]).to.equal("bears");
    expect(ranks[4]).to.equal(6);
    expect(teams[4]).to.equal("hawks");
    expect(ranks[5]).to.equal(5);
    expect(teams[5]).to.equal("pats");
    expect(ranks[6]).to.equal(4);
    expect(teams[6]).to.equal("vikings");
    expect(ranks[7]).to.equal(3);
    expect(teams[7]).to.equal("bengals");
    expect(ranks[8]).to.equal(2);
    expect(teams[8]).to.equal("giants");
    expect(ranks[9]).to.equal(1);
    expect(teams[9]).to.equal("lions");
  });

  it("sorts 16 teams correctly", () => {
    const sixteenTeams = [
      {
        id: 1,
        name: "hawks",
        spread: 8.5,
      },
      {
        id: 2,
        name: "vikings",
        spread: 7,
      },
      {
        id: 3,
        name: "lions",
        spread: 6.5,
      },
      {
        id: 4,
        name: "bills",
        spread: 5,
      },
      {
        id: 5,
        name: "pats",
        spread: 4.5,
      },
      {
        id: 6,
        name: "bengals",
        spread: 3,
      },
      {
        id: 7,
        name: "ravens",
        spread: 2,
      },
      {
        id: 8,
        name: "giants",
        spread: 1,
      },
      {
        id: 9,
        name: "colts",
        spread: 16,
      },
      {
        id: 10,
        name: "steelers",
        spread: 15,
      },
      {
        id: 11,
        name: "browns",
        spread: 14,
      },
      {
        id: 12,
        name: "bears",
        spread: 13.5,
      },
      {
        id: 13,
        name: "pack",
        spread: 13,
      },
      {
        id: 14,
        name: "fins",
        spread: 11,
      },
      {
        id: 15,
        name: "bills",
        spread: 10,
      },
      {
        id: 16,
        name: "chargers",
        spread: 9,
      },
    ];

    const answer = sort(sixteenTeams);
    console.log(`joe`);
    console.log(answer);

    const ranks = [];
    const teams = [];

    for (let i = 0; i < answer.length; i++) {
      ranks.push(answer[i].rank);
      teams.push(answer[i].name);
    }

    expect(ranks[0]).to.equal(16);
    expect(teams[0]).to.equal("colts");
    expect(ranks[1]).to.equal(15);
    expect(teams[1]).to.equal("steelers");
    expect(ranks[2]).to.equal(14);
    expect(teams[2]).to.equal("browns");
    expect(ranks[3]).to.equal(13);
    expect(teams[3]).to.equal("bears");
    expect(ranks[4]).to.equal(12);
    expect(teams[4]).to.equal("pack");
    expect(ranks[5]).to.equal(11);
    expect(teams[5]).to.equal("fins");
    expect(ranks[6]).to.equal(10);
    expect(teams[6]).to.equal("bills");
    expect(ranks[7]).to.equal(9);
    expect(teams[7]).to.equal("chargers");
    expect(ranks[8]).to.equal(8);
    expect(teams[8]).to.equal("hawks");
    expect(ranks[9]).to.equal(7);
    expect(teams[9]).to.equal("vikings");
    expect(ranks[10]).to.equal(6);
    expect(teams[10]).to.equal("lions");
    expect(ranks[11]).to.equal(5);
    expect(teams[11]).to.equal("bills");
    expect(ranks[12]).to.equal(4);
    expect(teams[12]).to.equal("pats");
    expect(ranks[13]).to.equal(3);
    expect(teams[13]).to.equal("bengals");
    expect(ranks[14]).to.equal(2);
    expect(teams[14]).to.equal("ravens");
    expect(ranks[15]).to.equal(1);
    expect(teams[15]).to.equal("giants");
  });
});

describe("sort func with locking", () => {
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

  it("sorts 5 teams correctly", () => {
    const fiveTeams = [
      {
        id: 1,
        name: "hawks",
        spread: 8,
        rank: 1,
        locked: true,
      },
      {
        id: 2,
        name: "vikings",
        spread: 7,
        rank: null,
        locked: false,
      },
      {
        id: 3,
        name: "lions",
        spread: 6,
        rank: 5,
        locked: true,
      },
      {
        id: 4,
        name: "bills",
        spread: 5,
        rank: null,
        locked: false,
      },
      {
        id: 5,
        name: "pats",
        spread: 4,
        rank: null,
        locked: false,
      },
    ];

    const answer = sort(fiveTeams);
    console.log(`joe`);
    console.log(answer);

    const ranks = [];
    const teams = [];

    for (let i = 0; i < answer.length; i++) {
      ranks.push(answer[i].rank);
      teams.push(answer[i].name);
    }

    expect(ranks[0]).to.equal(5);
    expect(teams[0]).to.equal("lions");
    expect(ranks[1]).to.equal(4);
    expect(teams[1]).to.equal("vikings");
    expect(ranks[2]).to.equal(3);
    expect(teams[2]).to.equal("bills");
    expect(ranks[3]).to.equal(2);
    expect(teams[3]).to.equal("pats");
    expect(ranks[4]).to.equal(1);
    expect(teams[4]).to.equal("hawks");
  });

  it("sorts 10 teams correctly", () => {
    const tenTeams = [
      {
        id: 9,
        name: "colts",
        spread: 16,
        rank: null,
        locked: false,
      },
      {
        id: 10,
        name: "steelers",
        spread: 15,
        rank: null,
        locked: false,
      },
      {
        id: 11,
        name: "browns",
        spread: 14,
        rank: null,
        locked: false,
      },
      {
        id: 12,
        name: "bears",
        spread: 13,
        rank: null,
        locked: false,
      },
      {
        id: 13,
        name: "pack",
        spread: 12,
        rank: null,
        locked: false,
      },
      {
        id: 14,
        name: "fins",
        spread: 10.5,
        rank: null,
        locked: false,
      },
      {
        id: 15,
        name: "chiefs",
        spread: 10,
        rank: 9,
        locked: true,
      },
      {
        id: 16,
        name: "chargers",
        spread: 9.5,
        rank: null,
        locked: false,
      },

      {
        id: 1,
        name: "hawks",
        spread: 8,
        rank: 6,
        locked: true,
      },
      {
        id: 2,
        name: "vikings",
        spread: 7,
        rank: null,
        locked: false,
      },
    ];

    const answer = sort(tenTeams);
    console.log(`joe`);
    console.log(answer);

    const ranks = [];
    const teams = [];

    for (let i = 0; i < answer.length; i++) {
      ranks.push(answer[i].rank);
      teams.push(answer[i].name);
    }

    expect(ranks[0]).to.equal(10);
    expect(teams[0]).to.equal("colts");
    expect(ranks[1]).to.equal(9);
    expect(teams[1]).to.equal("chiefs");
    expect(ranks[2]).to.equal(8);
    expect(teams[2]).to.equal("steelers");
    expect(ranks[3]).to.equal(7);
    expect(teams[3]).to.equal("browns");
    expect(ranks[4]).to.equal(6);
    expect(teams[4]).to.equal("hawks");
    expect(ranks[5]).to.equal(5);
    expect(teams[5]).to.equal("bears");
    expect(ranks[6]).to.equal(4);
    expect(teams[6]).to.equal("pack");
    expect(ranks[7]).to.equal(3);
    expect(teams[7]).to.equal("fins");
    expect(ranks[8]).to.equal(2);
    expect(teams[8]).to.equal("chargers");
    expect(ranks[9]).to.equal(1);
    expect(teams[9]).to.equal("vikings");
  });

  it("sorts 16 teams correctly", () => {
    // const sixteenTeams = [
    //   {
    //     id: 9,
    //     name: 'colts',
    //     spread: 16,
    //     rank: null,
    //     locked: false,
    //   }, //16
    //   {
    //     id: 10,
    //     name: 'steelers',
    //     spread: 15,
    //     rank: null,
    //     locked: false,
    //   }, //15
    //   {
    //     id: 11,
    //     name: 'browns',
    //     spread: 14,
    //     rank: null,
    //     locked: false,
    //   }, //13
    //   {
    //     id: 12,
    //     name: 'bears',
    //     spread: 13,
    //     rank: null,
    //     locked: false,
    //   }, //12
    //   {
    //     id: 13,
    //     name: 'pack',
    //     spread: 12,
    //     rank: null,
    //     locked: false,
    //   }, //10
    //   {
    //     id: 14,
    //     name: 'fins',
    //     spread: 10.5,
    //     rank: null,
    //     locked: false,
    //   }, //9
    //   {
    //     id: 15,
    //     name: 'chiefs',
    //     spread: 10,
    //     rank: 11,
    //     locked: true,
    //   }, //11
    //   {
    //     id: 16,
    //     name: 'chargers',
    //     spread: 9.5,
    //     rank: 14,
    //     locked: true,
    //   }, //14

    //   {
    //     id: 1,
    //     name: 'hawks',
    //     spread: 8,
    //     rank: null,
    //     locked: false,
    //   }, //8
    //   {
    //     id: 2,
    //     name: 'vikings',
    //     spread: 7,
    //     rank: null,
    //     locked: false,
    //   }, //7
    //   {
    //     id: 3,
    //     name: 'lions',
    //     spread: 6.5,
    //     rank: null,
    //     locked: false,
    //   }, //6
    //   {
    //     id: 4,
    //     name: 'bills',
    //     spread: 6,
    //     rank: null,
    //     locked: false,
    //   }, //5
    //   {
    //     id: 5,
    //     name: 'pats',
    //     spread: 5.5,
    //     rank: null,
    //     locked: false,
    //   },
    //   {
    //     id: 6,
    //     name: 'bengals',
    //     spread: 3,
    //     rank: null,
    //     locked: false,
    //   },
    //   {
    //     id: 7,
    //     name: 'ravens',
    //     spread: 2,
    //     rank: null,
    //     locked: false,
    //   },
    //   {
    //     id: 8,
    //     name: 'giants',
    //     spread: 1,
    //     rank: null,
    //     locked: false,
    //   },
    // ];

    const sixteenTeams = [
      {
        id: 1,
        name: "chiefs",
        spread: "8",
        rank: 14,
        locked: true,
        createdAt: "2022-01-25T18:49:16.256Z",
        updatedAt: "2022-01-25T18:49:16.256Z",
      },
      {
        id: 2,
        name: "eagles",
        spread: "8",
        rank: 5,
        locked: true,
        createdAt: "2022-01-25T18:49:16.263Z",
        updatedAt: "2022-01-25T18:49:16.263Z",
      },
      {
        id: 3,
        name: "ravens",
        spread: "3.8",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.264Z",
        updatedAt: "2022-01-25T18:49:16.264Z",
      },
      {
        id: 4,
        name: "browns",
        spread: "5.6",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.265Z",
        updatedAt: "2022-01-25T18:49:16.265Z",
      },
      {
        id: 5,
        name: "pack",
        spread: "3",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.267Z",
        updatedAt: "2022-01-25T18:49:16.267Z",
      },
      {
        id: 6,
        name: "titans",
        spread: "10.5",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.269Z",
        updatedAt: "2022-01-25T18:49:16.269Z",
      },
      {
        id: 7,
        name: "colts",
        spread: "14.5",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.271Z",
        updatedAt: "2022-01-25T18:49:16.271Z",
      },
      {
        id: 8,
        name: "vikings",
        spread: "4",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.272Z",
        updatedAt: "2022-01-25T18:49:16.272Z",
      },
      {
        id: 9,
        name: "wash",
        spread: "7",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.273Z",
        updatedAt: "2022-01-25T18:49:16.273Z",
      },
      {
        id: 10,
        name: "saints",
        spread: "3.5",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.274Z",
        updatedAt: "2022-01-25T18:49:16.274Z",
      },
      {
        id: 11,
        name: "bills",
        spread: "16.5",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.275Z",
        updatedAt: "2022-01-25T18:49:16.275Z",
      },
      {
        id: 12,
        name: "pats",
        spread: "6",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.277Z",
        updatedAt: "2022-01-25T18:49:16.277Z",
      },
      {
        id: 13,
        name: "bucs",
        spread: "9",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.278Z",
        updatedAt: "2022-01-25T18:49:16.278Z",
      },
      {
        id: 14,
        name: "cards",
        spread: "5.5",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.280Z",
        updatedAt: "2022-01-25T18:49:16.280Z",
      },
      {
        id: 15,
        name: "rams",
        spread: "3.6",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.281Z",
        updatedAt: "2022-01-25T18:49:16.281Z",
      },
      {
        id: 16,
        name: "chargers",
        spread: "2",
        rank: null,
        locked: false,
        createdAt: "2022-01-25T18:49:16.282Z",
        updatedAt: "2022-01-25T18:49:16.282Z",
      },
    ];

    const answer = sort(sixteenTeams);
    console.log(`joe`);
    console.log(answer);

    const ranks = [];
    const teams = [];

    for (let i = 0; i < answer.length; i++) {
      ranks.push(answer[i].rank);
      teams.push(answer[i].name);
    }

    expect(ranks[0]).to.equal(16);
    expect(teams[0]).to.equal("bills");
    expect(ranks[1]).to.equal(15);
    expect(teams[1]).to.equal("colts");
    expect(ranks[2]).to.equal(14);
    expect(teams[2]).to.equal("chiefs");
    expect(ranks[3]).to.equal(13);
    expect(teams[3]).to.equal("titans");
    expect(ranks[4]).to.equal(12);
    expect(teams[4]).to.equal("bucs");
    expect(ranks[5]).to.equal(11);
    expect(teams[5]).to.equal("wash");
    expect(ranks[6]).to.equal(10);
    expect(teams[6]).to.equal("pats");
    expect(ranks[7]).to.equal(9);
    expect(teams[7]).to.equal("browns");
    expect(ranks[8]).to.equal(8);
    expect(teams[8]).to.equal("cards");
    expect(ranks[9]).to.equal(7);
    expect(teams[9]).to.equal("vikings");
    expect(ranks[10]).to.equal(6);
    expect(teams[10]).to.equal("ravens");
    expect(ranks[11]).to.equal(5);
    expect(teams[11]).to.equal("eagles");
    expect(ranks[12]).to.equal(4);
    expect(teams[12]).to.equal("rams");
    expect(ranks[13]).to.equal(3);
    expect(teams[13]).to.equal("saints");
    expect(ranks[14]).to.equal(2);
    expect(teams[14]).to.equal("pack");
    expect(ranks[15]).to.equal(1);
    expect(teams[15]).to.equal("chargers");
  });
});
