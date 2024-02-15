import "./styles.css";
import Home from "./routes/home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contacts from "./routes/contacts";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
