export function getComputerTeam(countries, userTeam) {
  const availableTeams = countries.filter(
    (country) => country.name !== userTeam
  );
  const randomIndex = Math.floor(Math.random() * availableTeams.length);
  return availableTeams[randomIndex];
}

export function setCrickScore(state, action, team) {

  function updatePlayerScore(score, ball, wicket) {
    console.log("updateplayer score")
    const batsManIndx = state[team].wicket;
    const updatedPlayer = [...state[team].players];

    updatedPlayer[batsManIndx] = {
      ...updatedPlayer[batsManIndx],
      score: (updatedPlayer[batsManIndx].score || 0) + score,
      balls: (updatedPlayer[batsManIndx].balls || 0) + ball,
      wicket: wicket || null
    };
    console.log(updatedPlayer)
    return updatedPlayer;
  }

  if (typeof action.payload === "string") {
    if (action.payload === "Wide" || action.payload === "NB") {
      console.log("Ekumcheck extra", state[team].scorePerBall);

      return {
        ...state,
        [team]: {
          ...state[team],
          score: state[team].score + 1,
          scorePerBall: [...state[team].scorePerBall, action.payload],
          players: updatePlayerScore(0, 0)
        },
      };
    } else {
      console.log("Ekumcheck wicket", state[team].scorePerBall);
      return {
        ...state,
        [team]: {
          ...state[team],
          wicket: state[team].wicket + 1,
          balls: state[team].balls + 1,
          scorePerBall: [...state[team].scorePerBall, action.payload],
          players: updatePlayerScore(0, 1, action.payload)
        },
      };
    }
  } else {
    console.log("Ekumcheck score", state[team].scorePerBall);
    return {
      ...state,
      [team]: {
        ...state[team],
        score: state[team].score + action.payload,
        balls: state[team].balls + 1,
        scorePerBall: [...state[team].scorePerBall, action.payload],
        players: updatePlayerScore(action.payload, 1)
      },
    };
  }
}

export function setInningsEnd(state, action) {
  console.log("Ekumcheck", state, action);
  return {
    ...state,
    inning: action.payload.inn,
    batting: action.payload.team,
    target: action.payload.target,
  };
}

export function ballsToOvers(balls) {
  const overs = Math.floor(balls / 6);
  const remainingBalls = balls % 6;
  return `${overs}.${remainingBalls}`;
}

export function decideBattingBowlingTeams(state) {
  console.log(state);
  let battingTeam;
  let battingKey;
  let ballingTeam;
  let ballingKey;

  if (state.batting === state.team1.name) {
    battingTeam = state.team1.name;
    battingKey = "team1";
    ballingTeam = state.team2.name;
    ballingKey = "team2";
  } else {
    battingTeam = state.team2.name;
    battingKey = "team2";
    ballingTeam = state.team1.name;
    ballingKey = "team1";
  }
  console.log("Ekumcheck team batting", battingTeam, battingKey);
  console.log("Ekumcheck team batting", ballingTeam, ballingKey);
  return [battingKey, ballingTeam, ballingKey];
}

export function endFirstInning(state, battingKey, ballingTeam, dispatch) {
  if (
    state[battingKey].balls < state.overs * 6 &&
    state[battingKey].wicket < 11
  ) {
    console.log("Ekumcheck Its Inning 1 Continue");
  } else {
    console.log("Ekumcheck Its Inning 1 End");
    dispatch({
      type: "SET_INNINGS_END",
      payload: {
        inn: 2,
        team: ballingTeam,
        target: state[battingKey].score + 1,
      },
    });
  }
}

export function endSecondInning(state, battingKey, ballingKey, dispatch) {
  if (state[battingKey].score < state.target) {
    if (
      state[battingKey].balls < state.overs * 6 &&
      state[battingKey].wicket < 11
    ) {
      console.log("All Good 2nd inning can conitinue");
    } else {
      dispatch({ type: "SET_WINNER", payload: state[ballingKey] });
    }
  } else {
    console.log("Ekumcheck 2", state.target, state[battingKey].score);
    dispatch({ type: "SET_WINNER", payload: state[battingKey] });
  }
}

export function randomScoreArr(sel) {
  const outcomes = [ 4, 2, 2, 0, 4, "Bowled", 1, "Wide", 6, 1, 1, 2, 6, 0, 3, 1, 6, "NB", 0, 1, 4, 4, 1, 1, "LBW", 2, 4, "Bowled", 2, 4, 3, 1, 0, "Wide", 2, 2, 1, 4, 0, 4, 2, "NB", 1, 6, 6, 3, 1, 0, 6, 2, 1, 4, 2, "NB", 6, 6, 4, 1, 1, 4, 3, 0, 2, 1, "Wide", 4, 6, 0, 0, 6, 2, 2, 0, 1, 2, "NB", 4, 4, 4, 6, 2, 3, "Wide", 0, 6, 6, 4, 4, "LBW", 1, 4, 2, "Bowled", 6, 1, "Wide", "NB", 2, 1, 0, 3, 4, 6, 0, "Bowled", 2, 1, 0, 2, 4, "Wide", 1, "NB", 4, 3, 6, 0, 1, 6, 0, 2, 0, 1, 2, "Wide", 2, 3, "NB", 6, 0, 4, 2, 1, 1, 0, 0, 2, "Bowled", 1, 2, 4, 3, "Wide", "NB", 1, 0, 2, 6, 1, 2, 6, 1, 6, 0, 3, "Wide", "NB", 1, 2, 4, 6, 0, 2, 4, 3, 6, 1, 2, "Wide", "NB", "LBW", 3, 4, 0, 6, 1, 6, 2, 4, 0, 1, "Wide", "NB", 3, 4, 2, 6, 6, 2, "Bowled", 1, 0, 4, "Wide", "NB", 2, 4, 1, 0, 3, 6, 4, 6, 2, "LBW", 1, ];

  const outcomes1 = [ 4, 2, 2, 0, 4, "Bowled", 1, "Wide", 6, 1, 1, 2, 6, 0, 3, 1, 6, "NB", 0, 1, 4, 4, 1, 1, "LBW", 2, 4, "Bowled", 2, 4, 3, 1, 0, "Wide", 2, 2, 1, 0, 0, "Bowled", 2, "NB", 1, 6, 6, 3, 1, 0, 6, 2, 1, 4, 2, "NB", 6, 0, 4, 1, 1, 4, 3, 0, 2, 1, "Wide", 4, "Bowled", 0, 0, 6, 2, 2, 0, 1, 2, "NB", 4, 4, 4, 6, 2, 3, "Wide", 0, 6, 6, 4, 4, "LBW", 1, 4, 2, "Bowled", 6, 1, "Wide", "NB", 2, 1, 0, 3, 4, 6, 0, "Bowled", 2, 1, 0, 2, 4, "Wide", 1, "NB", 4, 3, 6, 0, 1, 6, 0, 2, 0, 1, 2, "Wide", 2, 3, "NB", 6, 0, 4, 2, 1, 1, 0, 0, 2, "Bowled", 1, 2, 4, 3, "Wide", "NB", 1, 0, 2, 6, 1, 2, 6, 1, 6, 0, 3, "Wide", "NB", 1, 2, 4, "Bowled", 0, 2, 4, 3, 6, 1, 2, "Wide", "NB", "LBW", 3, 4, 0, 6, 1, 6, 2, 4, 0, 1, "Wide", "NB", 3, 4, 2, 6, 6, 2, "Bowled", 1, 0, 4, "Wide", "NB", 2, 4, 1, 8, 3, 6, 4, 6, 2, "LBW", 1, ];

  const outcomes2 = [ 4, 2, 2, 0, 4, "Bowled", 1, "Wide", 6, 1, 1, 2, 6, 0, 3, 1, 6, "NB", 0, 1, "Run Out", 2, 1, 1, "LBW", 2, 4, "Bowled", 2, 4, 3, 1, 0, "Wide", 2, 2, 1, 0, 0, "Bowled", 2, "NB", 1, 6, 6, 3, 1, 0, 0, 2, 1, 4, 2, "NB", "LBW", 0, "LBW", 1, 1, 4, 3, 0, 2, 1, "Wide", 4, "Bowled", 0, 0, "Bowled", 2, 2, 0, 1, 2, "NB", 4, 4, 4, 0, 2, 3, "Wide", 0, 6, 6, "Bowled", 4, "LBW", 1, 4, 2, "Bowled", 0, 1, "Wide", "NB", 2, 1, 0, 3, "Bowled", 6, 0, "Bowled", 2, 1, 0, 2, 4, "Wide", 1, "NB", 4, 3, 2, 0, 1, "Bowled", 0, 2, 0, 1, 2, "Wide", 2, 3, "NB", 6, 0, 4, 2, 1, 1, 0, 0, 2, "Bowled", 1, 2, 4, 3, "Wide", "NB", 1, 0, 2, 6, 1, 2, "LBW", 1, "LBW", 0, 3, "Wide", "NB", 1, 2, 4, "Bowled", 0, 2, 4, 3, 6, 1, 2, "Wide", "NB", "LBW", 3, "Bowled", 0, 6, 1, 6, 2, 4, 0, 1, "Wide", "NB", 3, 4, 2, 6, 6, 2, "Bowled", 1, 0, 4, "Wide", "NB", 2, "Run Out", 1, 0, 3, "Bowled", 4, 6, 2, "LBW", 1, ];

  let output;
  if(sel === 1){
    output = outcomes
  }else if(sel === 2){
    output = outcomes1
  }else{
    output = outcomes2
  }
  return output;
}
