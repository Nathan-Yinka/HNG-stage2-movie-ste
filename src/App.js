import './App.css';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MovieCard from './components/MovieCard';
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
