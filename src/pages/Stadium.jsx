import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeamContext from "../context/TeamContext";
import styled from "styled-components";
import StadiumCard from "../components/StadiumCard";

const MidCoverWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(15rem, 1fr));
  padding: 3rem;
  align-items: center;
  gap: 3rem;
  overflow: auto;
`;




function Stadium() {
  const navigate = useNavigate();
  const { state } = useContext(TeamContext);
  const team1 = state.team1;
  const team2 = state.team2;


  useEffect(() => {
    if (!team1 || !team2) {
      navigate("/", { replace: true });
    }
  }, [team1, team2, navigate]); // dependencies


  return (
    <>
      <MidCoverWrap>
        {state.stadiums.map((stadium, indx) => (
          <StadiumCard stadium={stadium} key={indx} />
        ))}
      </MidCoverWrap>
    </>
  );
}

export default Stadium;
