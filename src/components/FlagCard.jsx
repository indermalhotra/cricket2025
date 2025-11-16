import { useContext } from "react";
import styled from "styled-components";
import TeamContext from "../context/TeamContext";
import { getComputerTeam } from "../utils/functions";

const FlCard = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--mediumFont);
  color: var(--color-secondary-400);
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  img {
    width: 15rem;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

function FlagCard({ country }) {
  const {dispatch, state} = useContext(TeamContext);

  function handleClick() {
    dispatch({type:"SET_TEAM1", payload: {...country, score:0, wicket:0, balls:0, scorePerBall:[]}});
    const computerTeam = getComputerTeam(state.countries, country.name);
    dispatch({type:"SET_TEAM2", payload: {...computerTeam, score:0, wicket:0, balls:0, scorePerBall:[]}});
  }

  return (
    <FlCard onClick={handleClick}>
      <img src={country.flag} alt={country.name} />
      <span>{country.name}</span>
    </FlCard>
  );
}

export default FlagCard;
