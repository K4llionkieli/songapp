import Title from "./components/Title";
import React from 'react'
import FilterBy from "./components/FilterBy";
import AddSong from "./components/AddSongs";
import Song from "./components/Song";

function App() {
  return (
    <div>
      <Title />
      <FilterBy />
      <AddSong />
      <div>
        <Song />
        <Song />
        <Song />
      </div>
    </div>

  
  );
}

export default App;
