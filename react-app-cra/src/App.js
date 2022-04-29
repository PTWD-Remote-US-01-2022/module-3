import logo from './logo.svg';
import './App.css';

import User from "./components/User";

// 1. embed variables
const helloStatement = <h2> Hello there! This is PTWD 01/2022 ❤️ </h2>
// everything that is JavaScript related and should be inside the HTML code, 
// needs to be wrapped in `{}` (single curly braces)

const ironhacker = {
  name: "joey",
  course: "web development"
}

const { name, course } = ironhacker;

// 2. embed function execution
function capitalizeFirstLetter(){
  return `${name[0].toUpperCase() + name.slice(1)}`
}


// 🚨🚨 Comments in JSX are different from comments in JavaScript 🚨🚨
function App() {


  // this is JavaScript comments


  return (
    <div className="App">
    {/* this is JSX comment */}
      <header className="App-header">
        <h1> Hi Francisco! </h1>

        { helloStatement }

        <p> Hi, { name }! How's { course } course going? </p>

        <h3> This is capitalized: { capitalizeFirstLetter() }  </h3>

        {/* 3. embed functions (or methods) */}
        <h3> {name.toUpperCase()} is attending the {course.toUpperCase()} bootcamp. </h3>

        <hr />

        {/* 4. embed static files (images) */}
        <img src={logo} className="App-logo" alt="this is logo" />

        <User />
      </header>
    </div>
  );
}

export default App;
