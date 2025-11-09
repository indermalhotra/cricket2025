export function getComputerTeam(countries, userTeam) {
  const availableTeams = countries.filter(
    (country) => country.name !== userTeam
  );
  const randomIndex = Math.floor(Math.random() * availableTeams.length);
  return availableTeams[randomIndex];
}

export function setCrickScore(state, action, team) {
  if (typeof action.payload === "string") {
    if (action.payload === "Wide" || action.payload === "NB") {
      return {
        ...state,
        [team]: {
          ...state[team],
          score: state[team].score++,
        },
      };
    } else {
      return {
        ...state,
        [team]: {
          ...state[team],
          wicket: state[team].wicket++,
          balls:state[team].balls++
        },
      };
    }
  } else {
    return {
      ...state,
      [team]: {
        ...state[team],
        score: state[team].score + action.payload,
        balls:state[team].balls++
      },
    };
  }
}

export function setInningsEnd(state, action){
  return {...state, inning:action.payload.inn, batting:action.payload.team }
}

export function ballsToOvers(balls) {
  const overs = Math.floor(balls / 6);
  const remainingBalls = balls % 6;
  return `${overs}.${remainingBalls}`;
}
