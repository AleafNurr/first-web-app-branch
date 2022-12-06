import React from 'react';
import Navigation from './Navigation';

function Header(){
    return(
        <header className="border-b flex justify-between items-center">
            <span className="font-bold">
                Citoss Feedback App
            </span>
            <Navigation />
        </header>
    )
}

export default Header;