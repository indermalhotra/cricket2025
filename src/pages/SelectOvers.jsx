import { useContext, useEffect } from "react";
import styled from "styled-components"
import TeamContext from "../context/TeamContext";
import { useNavigate } from "react-router-dom";

const OverContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,5fr);
`;

const DisplayOver = styled.div`
    text-align: center;
    padding: 2rem;
    font-weight: bold;
    font-size: var(--smallFont);
    cursor: pointer;
    transition: all .3s;
    margin: 1rem;
    border-radius: 2rem;

    &:hover{
        background-color: var(--color-primary-50);
    }
`

function SelectOvers() {
    const {state, dispatch} = useContext(TeamContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!state.stadium){
            navigate("/stadium")
        }
    },[navigate, state.stadium]);

    console.log(state);
    function selOvers(over){
        dispatch({type:"SET_OVERS", payload:over})
    } 

    return (
        <OverContainer>
            <DisplayOver onClick={()=>selOvers(10)}>10 Overs</DisplayOver>
            <DisplayOver onClick={()=>selOvers(15)}>15 Overs</DisplayOver>
            <DisplayOver onClick={()=>selOvers(20)}>20 Overs</DisplayOver>
            <DisplayOver onClick={()=>selOvers(50)}>50 Overs</DisplayOver>
        </OverContainer>
    )
}

export default SelectOvers
