import { Outlet } from "react-router-dom"
import styled from "styled-components";

const MainDivStyle = styled.div`
    width: 96%;
    max-width: 120rem;
    font-size: 1.6rem;
    margin: auto;
`;

function AppLayout() {
    return (
        <MainDivStyle>
            hello
            <Outlet/>
        </MainDivStyle>
    )
}

export default AppLayout
