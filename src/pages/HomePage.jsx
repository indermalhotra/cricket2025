import styled from "styled-components";
import FlagCard from "../components/FlagCard";
import { useContext } from "react";
import TeamContext from "../context/TeamContext";

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


const MidCover = styled.div`
  width: 90%;
  max-width: 100rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 2rem;
`;

const MidCoverWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(15rem, 1fr));
  padding: 3rem;
  align-items: center;
  gap: 3rem;
`;

const Heading = styled.h1`
  font-size: var(--bigFont);
  color: var(--color-secondary-400);
  text-align: center;
`;

function HomePage() {
  const { state } = useContext(TeamContext);
  const countries = state.countries;
  return (
    <MidCoverWrap>
      {countries.map((country, indx) => (
        <FlagCard country={country} key={indx} />
      ))}
    </MidCoverWrap>
  );
}

export default HomePage;
