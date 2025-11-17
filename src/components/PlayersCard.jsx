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

const WicketGone = styled.div`
  font-size: 12px;
  color: #000;
`;

const FoursSixes = styled.div`
  font-size: 12px;
  color: #000;
`;

function PlayersCard({ player }) {
  return (
    <PlayerWrapper>
      <img src={player.image} alt={player.name} />
      <Players>{player.name} {player.score && <FoursSixes>6s = {player.six || 0} 4s = {player.four || 0} 0s = {player.dot || 0}</FoursSixes>} {player.wicket && <WicketGone>{player.wicket}</WicketGone>}</Players>
      <Score>{player.score} {player.balls && <span>({player.balls})</span>}</Score>
    </PlayerWrapper>
  );
}

export default PlayersCard;
