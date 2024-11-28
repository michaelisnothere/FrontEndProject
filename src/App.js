import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieReviewList from './Fetch';
import Header from './Header';
import HomePage from './HomePage';
import Search from './SearchBar';


function App() {

  return (
    <div className="App">
      <h1>this is app</h1>
      <Header/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/moviereviews" element={<MovieReviewList />} />
            <Route path="/search" element={<Search />}/>
        </Routes>
      
    </div>

  );
}

export default App;
