import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard";
import Form from "./pages/Form";
import Bar from "./pages/Bar";
// import Navbar from "./pages/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          {/* <Navbar /> */}
          <Route path="/" element={<Home />} />
          <Route path="Form" element={<Form />} />
          <Route path="Bar" element={<Bar />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
