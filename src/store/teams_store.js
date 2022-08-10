import axios from "axios";
import { sort } from "./funcs";

const LOAD_TEAMS = "LOAD_TEAMS";
// const LOAD_NUM_OF_TEAMS = "LOAD_NUM_OF_TEAMS";
const ADD_TEAM = "ADD_TEAM";
const DELETE_TEAM = "DELETE_TEAM";

//////////////////////////////////// ACTION CREATORS below:

const _loadTeams = (teams) => {
  return { type: LOAD_TEAMS, teams };
};

// const _loadNumOfTeams = (number) => {
//   return { type: LOAD_NUM_OF_TEAMS, number };
// };

const _addTeam = (team) => {
  return { type: ADD_TEAM, team };
};

const _deleteTeam = (team) => {
  return { type: DELETE_TEAM, team };
};

//////////////////////////////////// THUNKS below:

export const loadTeams = () => {
  return async (dispatch) => {
    let teams = (await axios.get("/api/teams")).data;
    // dispatch(loadNumOfTeams(teams.length));

    // console.log("teams before sort in thunk", teams);

    // const newTeams = sort(teams);

    dispatch(_loadTeams(teams));
  };
};

export const addTeams = (teams) => {};

export const addTeam = (team) => {
  return async (dispatch) => {
    team = (await axios.post(`/api/teams/`, team)).data;
    dispatch(_addTeam(team));
  };
};

export const clearTeams = (teams) => {
  return async (dispatch) => {
    teams.map(async (team) => {
      team = await axios.delete(`/api/teams/${team.id}`);
      dispatch(_deleteTeam(team));
    });

    setTimeout(() => {
      dispatch(loadTeams());
    }, 200);
  };
};

// export const loadNumOfTeams = (number) => {
//   return async (dispatch) => {
//     dispatch(_loadNumOfTeams(number));
//   };
// };

export const teams = (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.teams;
    case ADD_TEAM:
      return [...state, action.team];
    case DELETE_TEAM:
      return [...state].filter((team) => team.id !== action.team.id);
    default:
      return state;
  }
};

// export const numOfTeams = (state = 0, action) => {
//   switch (action.type) {
//     case LOAD_NUM_OF_TEAMS:
//       return action.number;
//     default:
//       return state;
//   }
// };
