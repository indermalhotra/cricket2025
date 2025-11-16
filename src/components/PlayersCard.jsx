import styled from "styled-components";

const PlayerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 2rem;
  margin: 1rem;
  align-items: center;

  &:hover img{
      transform: scale(2);
      z-index: 99999;
    }

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    transform: scale(1);
    transition: all 0.3s ease-in-out;

    
  }
`;
const Players = styled.div`
  padding: 1rem;
  font-size: var(--smallFont);
`;
const Score = styled.div`
  font-size: 1.3rem;
  color: #000;
`

function PlayersCard({ player }) {
  return (
    <PlayerWrapper>
      <img src={player.image} alt={player.name} />
      <Players>{player.name}</Players>
      <Score>{player.score}</Score>
    </PlayerWrapper>
  );
}

export default PlayersCard;
