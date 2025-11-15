 useEffect(() => {
    if (state[selectTeam]?.balls) {
      if (state.inning === 1) {
        let battingTeam;
        if (state.batting === state.team1.name) {
          battingTeam = state.team2.name;
        } else {
          battingTeam = state.team1.name;
        }
        dispatch({
          type: "SET_INNINGS_END",
          payload: { inn: 2, team: battingTeam },
        });
      } else {
        let battingTeam =
          state.batting === state.team1.name ? "team1" : "team2";

        let bowlingTeam =
          state.batting === state.team1.name ? "team2" : "team1";

        console.log("indercheck batting", state[battingTeam]);
        console.log("indercheck bowling", state[bowlingTeam]);
        if (
          state[battingTeam].balls < state.overs * 6 &&
          state[battingTeam].wicket < 11 &&
          state[battingTeam].score < state[bowlingTeam].score
        ) {
          console.log("indertest 222 balls and wickets left");
        } else {
          if (!state.winner) {
            // its second inning either wickets or ball finish
            if (state[battingTeam].score > state[bowlingTeam].score) {
              console.log("indertest Winner is", state[battingTeam]);
              dispatch({ type: "SET_WINNER", payload: state[battingTeam] });
            } else if (state[battingTeam].score === state[bowlingTeam].score) {
              console.log("indertest Match tie");
              dispatch({ type: "SET_WINNER", payload: "Match Tie" });
            } else {
              console.log("indertest Winner is", state[bowlingTeam]);
              dispatch({ type: "SET_WINNER", payload: state[bowlingTeam] });
            }
          }
        }
      }
    }
  }, [selectTeam, state, dispatch]);