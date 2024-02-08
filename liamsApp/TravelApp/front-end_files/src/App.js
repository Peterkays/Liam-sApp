import "./styles.css";
import Home from "./routes/home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contacts from "./routes/contacts";
import SignUp from "./routes/Sign-up";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contacts" element={<Contacts />} />
	<Route path="/signup" element={<Sign-up />} />
      </Routes>
    </div>
  );
}
