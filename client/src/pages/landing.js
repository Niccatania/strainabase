import React, {useState} from 'react'

export default function Landing() {
  const [searchInput, setSearchInput ] = useState("");

  function handleSearch(event){
  const userInput = event.target.value;
  setSearchInput(userInput)
  }
  function search(event) {
    event.preventDefault();
    console.log(searchInput);
  }


    return (
      <>
        <div id="sidebar">
          <h1>Strainabase</h1>
          <div>
            <form id="search-form" role="search"
            onSubmit={search}>
              <input
                id="input"
                aria-label="Search strain"
                placeholder="Search"
                type="search"
                name="input"
                onChange={handleSearch}
              />
                 <button type="submit">Search</button>
            </form>
           
           
          
          </div>
          <nav>
           
              <h3>
                <a href={`/strain/1`}>Watermelon Gelato</a>
              </h3>
           
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }