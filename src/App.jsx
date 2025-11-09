import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import GlobalStyles from "./styles/GlobalStyles";


import HomePage from "./pages/HomePage";
import Covering from "./pages/Covering";
import Stadium from "./pages/Stadium";
import Teams from "./pages/Teams";
import SelectOvers from "./pages/SelectOvers";

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route element={<Covering/>} >
            <Route index element={<HomePage />} />
            <Route path="stadium" element={<Stadium/>} />
            <Route path="selectover" element={<SelectOvers/>}></Route>
            <Route path="teams" element={<Teams/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
