import './App.css';
import Products from "./components/Example-listOfStrings-Products";
import ProjectList from "./components/Example-listOfObjects-ProjectList";
import MoviesList from "./components/MoviesList";



function App() {
  return (
    <div className="App">
      <Products />

      <hr />

      <ProjectList />

      <hr />

      <MoviesList />
    </div>
  );
}

export default App;
