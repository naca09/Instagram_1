import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CricleAvatar } from './criclle_avatar';

function App() {
  return (
    <div className="App">
      <CricleAvatar url={''} size={56} onClick={function (): void {
        throw new Error('Function not implemented.');
      }} />
    </div>
  );
}

export default App;
