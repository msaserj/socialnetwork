import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
        <header className='header'>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg" alt="logo"/>
        </header>
        <nav className='nav'>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
        <div className='content'>
            <img src="" alt=""/>
        </div>
    </div>
  );
}


export default App;
