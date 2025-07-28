import Bg from './components/bg/Bg.jsx'
import React from 'react';
import './App.css';
import Quotes from './components/quotes/Quotes.jsx';


export default function App() {
    return (
        <div className="app-container" >
            <Bg />
            <Quotes />
        </div>
    );
}