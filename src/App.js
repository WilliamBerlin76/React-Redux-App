import React from 'react';

import './App.css';
import AnimeList from './components/animeList';
import AnimeListPageTwo from './components/animeListPage2'
import AnimeListPageThree from './components/animeListPageThree'
function App() {
  return (
    <div className="App">
      <h1>Naruto Filler List!</h1>
      <AnimeList />
      <AnimeListPageTwo />
      <AnimeListPageThree />
    </div>
  );
}

export default App;
