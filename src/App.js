import React, { Component } from 'react';

import './App.css';
import QueryArea from "./components/QueryArea";
import MovieCard from "./components/MovieCard";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div>
                    <h2>Movie Search</h2>
                </div>
                <QueryArea/>
                <MovieCard/>
            </div>

        );
    }
}

export default App;

