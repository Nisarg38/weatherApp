import {React,useEffect, useState } from 'react';
import Weather from './weather';

function Search() {


  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])



    
   
  return (

    <div className="main" >

          <form className="search" >
            <input type="text" name="name" placeholder="Enter City"/>
            <input type="submit" value="Submit" />
          </form>
        
   

    </div>

  );
}

export default Search;