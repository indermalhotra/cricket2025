
import styled from "styled-components";
import TeamContext from "../context/TeamContext";
import { useContext } from "react";

const StCard = styled.button`
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
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

function StadiumCard({ stadium }) {
  const {dispatch} = useContext(TeamContext);
  
  const clickHandler = () => {
    dispatch({type:"SET_STADIUM", payload:stadium})
  }

  return (
    <StCard onClick={clickHandler}>
      <img src={stadium.image} alt={stadium.name} />
      <span>{stadium.name}</span>
    </StCard>
  );
}

export default StadiumCard;
