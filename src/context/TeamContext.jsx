import { createContext, useReducer } from "react";
import { dataCountries, dataStadiums } from "../data/cricData";

const TeamContext = createContext();
const initialState = {
  countries: dataCountries,
  stadiums: dataStadiums,
  team1: null,
  team2: null,
  stadium: null,
  toss: null,
  batting:null
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
      };
    case `SET_DECIDE`:
      return {
        ...state,
        batting:action.payload === 0 ? state["team1"].name : state["team2"].name
      };
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
