import { useContext } from "react";
import styled from "styled-components"
import TeamContext from "../context/TeamContext";

const SinglePlayer = styled.div`
    span, img{
        display: block;
        
    }
`;

function SelectBowler({player, plNo}) {
    const { dispatch } = useContext(TeamContext);
    function SelectBowlerFn(){
        dispatch({type:"SET_BOWLER", payload:player.name})
        console.log(player.name, plNo)
    }
    return (
        <SinglePlayer onClick={()=>SelectBowlerFn()}>
           <img src={player.image} alt={player.image} /> 
           <span>{player.name}</span>
        </SinglePlayer>
    )
}

export default SelectBowler
