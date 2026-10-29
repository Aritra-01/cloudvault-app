import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import MediaPlayer from "./pages/MediaPlayer";
import "./styles/global.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/player" element={<MediaPlayer />} />
      </Routes>
    </HashRouter>
  );
}
