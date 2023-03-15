import React from 'react';
import Delete from './icons/Delete';
import Copy from './icons/Copy';
import './App.css';

const App = () => {
  const handleSubmit = () => {
    console.log('Run Button Clicked');
  };

  return (
    <main className='app'>
      <header className='header__container'>
        <div className='header'>
          <h3>JSON</h3>
          <div className='header__right'>
            <button className='runBtn' onClick={handleSubmit}>*
              RUN
            </button>
            <Delete />
          </div>
        </div>

        <div className='header'>
          <h3>Typescript</h3>
          <Copy />
        </div>
      </header>

      <div className='code__container'></div>
    </main>
  );
}

export default App;
