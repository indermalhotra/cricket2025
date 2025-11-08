import { useContext, useEffect } from "react";
import styled from "styled-components";
import TeamContext from "../context/TeamContext";
import { useNavigate } from "react-router-dom";
import PlayersCard from "../components/PlayersCard";
import Button from "../components/Button";

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

function Teams() {
  const { state, dispatch } = useContext(TeamContext);
  const navigate = useNavigate();

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
    console.log(call)
    dispatch({type:"SET_DECIDE", payload:call})
  }



  if (state.stadium) {
    return (
      <>
        <TeamContainer>
          <TeamBox $color={state.team1.color}>
            {state.team1.players.map((player) => (
              <PlayersCard player={player} key={player.id} />
            ))}
          </TeamBox>
          <TeamBox $color={state.team2.color}>
            {state.team2.players.map((player) => (
              <PlayersCard player={player} key={player.id} />
            ))}
          </TeamBox>
        </TeamContainer>
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
          {(state.toss === "team1" && state.batting == undefined)&&(
            <>
              <Button size="small" onClick={() => {selected(0)}}>
                Batting...
              </Button>
              <Button size="small" onClick={() => {selected(1)}}>
                bowling...
              </Button>
            </>
          )}
          {
            (state.toss === "team2" && state.batting == undefined) && (
              selected(Math.floor(Math.random() * 2))
            )
          }
          
        </div>
      </>
    );
  } else {
    return <TeamContainer>Something Wrong stadium not selected</TeamContainer>;
  }
}

export default Teams;
