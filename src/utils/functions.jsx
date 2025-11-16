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
      console.log("Ekumcheck extra", state[team].scorePerBall)
      return {
        ...state,
        [team]: {
          ...state[team],
          score: state[team].score++,
          scorePerBall: state[team].scorePerBall.push(action.payload)
        },
      };
    } else {
      console.log("Ekumcheck wicket", state[team].scorePerBall)
      return {
        ...state,
        [team]: {
          ...state[team],
          wicket: state[team].wicket++,
          balls:state[team].balls++,
          scorePerBall: state[team].scorePerBall.push(action.payload)
        },
      };
    }
  } else {
    console.log("Ekumcheck score", state[team].scorePerBall)
    return {
      ...state,
      [team]: {
        ...state[team],
        score: state[team].score + action.payload,
        balls:state[team].balls++,
        scorePerBall: state[team].scorePerBall.push(action.payload)
      },
    };
  }
}

export function setInningsEnd(state, action){
  console.log("Ekumcheck", state, action)
  return {...state, inning:action.payload.inn, batting:action.payload.team, target:action.payload.target }
}

export function ballsToOvers(balls) {
  const overs = Math.floor(balls / 6);
  const remainingBalls = balls % 6;
  return `${overs}.${remainingBalls}`;
}
