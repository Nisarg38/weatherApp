import './App.css';
import {React} from 'react';
import Search from "./Search"

function App() {


  return (

    <div className="App">

        <div class="logo" >

        <h1 className="title">WeatherApp</h1>
          
          <a href="https://github.com/Nisarg38" target="_blank" rel="noopener noreferrer" className="git" >
            <img alt="github" src="https://raw.githubusercontent.com/Nisarg38/Sorting-Algo-Visualizer-Js/main/images/GitHub-Mark-Light-120px-plus.png"
            width="50" height="50"/>
          </a>
          <a href="https://github.com/Nisarg38" target="_blank" rel="noopener noreferrer" className="repo">
            <img alt="github" src="https://raw.githubusercontent.com/Nisarg38/Sorting-Algo-Visualizer-Js/main/images/1331-repository-outline%20(1).gif"
            width="100" height="100"/>
          </a>
        </div>

        <Search
        />

    

    </div>
  );
}

export default App;
