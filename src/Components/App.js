import './App.css';
import {React} from 'react';
import git from "images/git.png";
import repo from "images/repo.gif";
import Search from "./Search"

function App() {


  fetch('https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=d8be39510f66b94d1859317a8e9cab91')
  .then(res => res.json())
  .then((data) => {
      this.setState({ contacts: data })
  })
  .catch(console.log)

  return (

    <div className="App">

        <div class="logo" >

        <h1 className="title">WeatherApp</h1>
          
          <a href="https://github.com/Nisarg38" target="_blank" rel="noopener noreferrer" className="git" >
            <img alt="github" src={git}
            width="50" height="50"/>
          </a>
          <a href="https://github.com/Nisarg38" target="_blank" rel="noopener noreferrer" className="repo">
            <img alt="github" src={repo}
            width="100" height="100"/>
          </a>
        </div>

        <Search
        />
    

    </div>
  );
}

export default App;
