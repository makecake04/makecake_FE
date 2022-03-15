import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

//css
import "../css/App.css";

//pages
import { Home, Design } from "../pages/page";

//components

function App() {
  return (
    // <div className="App">
    <MobileView>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </MobileView>
    // </div>
  );
}

const MobileView = styled.div`
  margin: 0 auto;
  max-width: 390px;
  max-height: 844px;
`;

export default App;
