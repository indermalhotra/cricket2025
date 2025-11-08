import { useContext } from "react";
import styled from "styled-components";
import TeamContext from "../context/TeamContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomeCover = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  flex-direction: column;

  /* For better browser support */
  -webkit-backdrop-filter: blur(5px);
`;

const StBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-image: url(${props=>props.$bgimage});
`;

const MidCover = styled.div`
  width: 90%;
  max-width: 100rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 2rem;
`;

const SelectedCountry = styled.div`
  font-size: var(--biggerFont);
  font-weight: bold;
  color: var(--color-primary-50);
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.57);
  margin-bottom: 0;
`;

const Heading = styled.h1`
  font-size: var(--bigFont);
  color: var(--color-secondary-400);
  text-align: center;
`;

const SubHeading = styled.h2`
  font-size: var(--mediumFont);
  color: var(--color-secondary-500);
  text-align: center;
  margin: 0;
  span {
    font-size: var(--smallFont);
    display: block;
  }
`;

const TossWinner = styled.div`
  font-size: var(--smallFont);
  font-weight: bold;
`

function Covering() {
  const { state } = useContext(TeamContext);
  const tossWinner = state.toss && state[state.toss].name;
  const haveBothTeams = state.team1 && state.team2;
  const navigate = useNavigate();

  const location = useLocation().pathname;

  // level0: selecting country, level1: selecting stadium, level2: showing players
  let level = [
    { heading: "Select Country" },
    { heading: "Select Stadium" },
    { heading: "Teams" },
  ];

  let levelIndx;
  if (location.includes("stadium")) {
    levelIndx = 1;
  } else if (location.includes("teams")) {
    levelIndx = 2;
  } else {
    levelIndx = 0;
  }

  console.log(level);

  return (
    <HomeCover>
      {haveBothTeams && (
        <SelectedCountry>
          {state.team1.name} Vs {state.team2.name}
        </SelectedCountry>
      )}
      {state.stadium && (
        <SubHeading>
          Venu: {state.stadium.name} - {state.stadium.country}
        </SubHeading>
      )}
      {console.log(state)}
      {
        state.toss && <TossWinner>Toss Winner: {tossWinner} {state.batting && ` Batting: ${state.batting}`} </TossWinner>
      }
      <MidCover>
        {levelIndx !== 2 && <Heading>{level[levelIndx].heading}</Heading>}
        <StBackground $bgimage={state?.stadium?.image}/>
        <Outlet />
      </MidCover>
      
      {haveBothTeams && levelIndx == 0 && (
        <Button size="midium" onClick={() => navigate("stadium")}>
          Next - Select Stadium
        </Button>
      )}
      {state.stadium && levelIndx == 1 && (
        <Button size="midium" onClick={() => navigate("teams")}>
          Next - Team Players
        </Button>
      )}
    </HomeCover>
  );
}

export default Covering;
