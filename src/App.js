import Select_Music from "./Pages/Select_Music";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="Home" element={<Select_Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
