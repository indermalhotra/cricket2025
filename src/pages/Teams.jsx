import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TeamContext from "../context/TeamContext";
import { useNavigate } from "react-router-dom";
import PlayersCard from "../components/PlayersCard";
import Button from "../components/Button";
import {
  ballsToOvers,
  endFirstInning,
  decideBattingBowlingTeams,
  endSecondInning,
  randomScoreArr,
} from "../utils/functions";

const TeamContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;

const TeamBox = styled.div`
  width: 50%;
  padding: 2rem;
  background-color: ${(props) => props.$color};
  border-radius: 3rem;
  border: 1px solid var(--color-grey-600);
`;

const PlayingButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
`;

const Score = styled.div`
  font-size: var(--smallFont);
  background-color: ${(props) => props.$col};
  padding: 1rem;
  border-radius: 2rem;
`;

const WinnerOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BallsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BallsIndicator = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: maroon;
  border-radius: 100%;
  color: #fff;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WinnerInner = styled.div`
  max-width: 70rem;
  width: 95%;
  height: 50%;
  max-height: 30rem;
  background-color: #fff;
  border: 2px solid var(--color-secondary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    max-width: 15rem;
  }
`;

const WinnerName = styled.div`
  font-size: var(--mediumFont);
  margin-top: 2rem;
`;

function Teams() {
  const { state, dispatch } = useContext(TeamContext);
  const navigate = useNavigate();

  const [selectTeam, setSelectTeam] = useState(null);

  console.log(state);
  useEffect(() => {
    if (!state.stadium) {
      navigate("/", { replace: true });
    }
  }, [state.stadium, navigate]); // dependencies

  function toss(call) {
    const winner = Math.random() < 0.5 ? "Head" : "Tail";
    if (winner === call) {
      dispatch({ type: "SET_TOSS", payload: "team1" });
    } else {
      dispatch({ type: "SET_TOSS", payload: "team2" });
    }
  }

  function selected(call) {
    console.log(call);
    dispatch({ type: "SET_DECIDE", payload: call });
  }

  const [battingKey, ballingTeam, ballingKey] = decideBattingBowlingTeams(state);
  
  let diff;
  if(state[battingKey].wicket < 4){
    diff = 1;
  }else if(state[battingKey].wicket > 4 || state[battingKey].wicket < 8){
    diff = 2;
  }else{
    diff = 3;
  }
  const outcomes = randomScoreArr(diff);

  function getRandomOutcome() {
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const randomValue = outcomes[randomIndex];
    return randomValue;
  }

  function playGame(team) {
    const randomScore = getRandomOutcome();
    if (team === "team1") {
      setSelectTeam("team1");
      dispatch({ type: "SET_SCORE_BATTING", payload: randomScore });
    } else {
      setSelectTeam("team2");
      dispatch({ type: "SET_SCORE_BOWLING", payload: randomScore });
    }
  }

  
    
  useEffect(() => {
    if (state.winner) return;

    if (state[selectTeam]?.balls) {
      if (state.inning === 1) {
        console.log("Ekumcheck Its Inning 1");
        endFirstInning(state, battingKey, ballingTeam, dispatch);
      } else {
        console.log("Ekumcheck Its Inning 2");
        endSecondInning(state, battingKey, ballingKey, dispatch);
      }
    }
  }, [selectTeam, state, dispatch, battingKey, ballingTeam, ballingKey]);

  const battingTeamName = state.batting;
  let scoreShow = state?.team1?.name === battingTeamName ? "team1" : "team2";

  let targetShow = state?.team1?.name === state.batting ? "team2" : "team1";

  console.log(targetShow);

  function displayScore() {
    return (
      <Score $col={state[scoreShow].color}>
        {state[scoreShow].name.split("").slice(0, 3)} {state[scoreShow].score}/
        {state[scoreShow].wicket} - {ballsToOvers(state[scoreShow].balls)}
      </Score>
    );
  }

  function targetScore() {
    return (
      <Score $col={state[targetShow].color}>
        {state[targetShow].name.split("").slice(0, 3)} {state[targetShow].score}
        /{state[targetShow].wicket} - {ballsToOvers(state[targetShow].balls)}
      </Score>
    );
  }

  if (state.stadium) {
    return (
      <>
        {state.winner && (
          <WinnerOverlay>
            <WinnerInner>
              <img src={state.winner.flag} alt={state.winner.name} />
              <WinnerName>Champion is: {state.winner.name}</WinnerName>
            </WinnerInner>
          </WinnerOverlay>
        )}
        <TeamContainer>
          <TeamBox $color={state.team1.color}>
            {state.team1.players.map((player) => (
              <PlayersCard player={player} key={player.id}/>
            ))}
          </TeamBox>
          <TeamBox $color={state.team2.color}>
            {state.team2.players.map((player) => (
              <PlayersCard player={player} key={player.id}/>
            ))}
          </TeamBox>
        </TeamContainer>
        {state[battingKey].scorePerBall.length > 0 && (
          <BallsContainer>
            {state[battingKey].scorePerBall.slice(-6).map((run, indx) => (
              <BallsIndicator key={indx}>{run}</BallsIndicator>
            ))}
          </BallsContainer>
        )}
        <div style={{ textAlign: "center" }}>
          {!state.toss && (
            <>
              <Button size="small" onClick={() => toss("Head")}>
                Head
              </Button>
              <Button size="small" onClick={() => toss("Tail")}>
                Tail
              </Button>
            </>
          )}
          {state.toss === "team1" && state.batting == undefined && (
            <>
              <Button
                size="small"
                onClick={() => {
                  selected(0);
                }}
              >
                Batting
              </Button>
              <Button
                size="small"
                onClick={() => {
                  selected(1);
                }}
              >
                bowling
              </Button>
            </>
          )}
          {state.toss === "team2" &&
            state.batting == undefined &&
            selected(Math.floor(Math.random() * 2))}

          {state.team1.name === state.batting ? (
            <PlayingButtons>
              {displayScore()}
              {state.inning === 2 && targetScore()}
              <Button size="small" onClick={() => playGame("team1")}>
                Hit Ball
              </Button>
            </PlayingButtons>
          ) : (
            state.batting && (
              <PlayingButtons>
                {displayScore()}
                {state.inning === 2 && targetScore()}
                <Button size="small" onClick={() => playGame("team2")}>
                  Bowling
                </Button>
              </PlayingButtons>
            )
          )}
        </div>
      </>
    );
  } else {
    return <TeamContainer>Something Wrong stadium not selected</TeamContainer>;
  }
}

export default Teams;
