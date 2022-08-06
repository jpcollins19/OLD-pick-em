import axios from "axios";

const LOAD_TEAMS = "LOAD_TEAMS";
const ADD_TEAM = "ADD_TEAM";
const CLEAR_TEAMS = "CLEAR_TEAMS";

//////////////////////////////////// ACTION CREATORS below:

const _loadTeams = (teams) => {
  return { type: LOAD_TEAMS, teams };
};

const _addTeam = (team) => {
  return { type: ADD_TEAM, team };
};

const _clearTeams = (team) => {
  return { type: CLEAR_TEAMS, team };
};

//////////////////////////////////// THUNKS below:

export const loadTeams = () => {
  return async (dispatch) => {
    const teams = (await axios.get("/api/teams")).data;
    dispatch(_loadTeams(teams));
  };
};

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
      dispatch(_clearTeams(team));
    });
  };
};

export const teams = (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.teams;
    case ADD_TEAM:
      return [...state, action.team];
    case CLEAR_TEAMS:
      return [...state].filter((team) => team.id !== action.team.id);
    default:
      return state;
  }
};
