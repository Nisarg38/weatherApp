import {React} from 'react';

function Search() {


   

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