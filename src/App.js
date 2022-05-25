import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Narbar from "./components/Narbar";

function App() {
  return (
    <BrowserRouter>
      <Narbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms/" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route exact path="/error/" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
