import { createContext, useReducer } from "react";
import { dataCountries, dataStadiums } from "../data/cricData";
import { setCrickScore, setInningsEnd } from "../utils/functions";

const TeamContext = createContext();
const initialState = {
  countries: dataCountries,
  stadiums: dataStadiums,
  inning:null,
  team1: null,
  team2: null,
  stadium: null,
  toss: null,
  batting: null,
  overs: null,
  winner:null,
  target:null
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TEAM1":
      return {
        ...state,
        team1: action.payload,
      };
    case "SET_TEAM2":
      return {
        ...state,
        team2: action.payload,
      };
    case `SET_STADIUM`:
      return {
        ...state,
        stadium: action.payload,
      };
    case `SET_TOSS`:
      return {
        ...state,
        toss: action.payload,
        inning: 1
      };
    case `SET_DECIDE`:
      return {
        ...state,
        batting:
          action.payload === 0 ? state["team1"].name : state["team2"].name,
      };
    case `SET_OVERS`:
      return {
        ...state,
        overs: action.payload,
      };

    case `SET_SCORE_BATTING`:
      return setCrickScore(state, action, "team1");

    case `SET_SCORE_BOWLING`:
      return setCrickScore(state, action, "team2");

    case `SET_INNINGS_END`:
      return setInningsEnd(state, action);

    case `SET_WINNER`:
      return {...state, winner:action.payload}
      
    default:
      return state;
  }
}

export function TeamProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TeamContext.Provider value={{ dispatch, state }}>
      {children}
    </TeamContext.Provider>
  );
}

export default TeamContext;
