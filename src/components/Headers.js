import React from 'react';

function Headers(){
        return(
            <header>
                <div className='wrapper header-content'>
                    <a href='/' className='logo'>Sales</a>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sales">Sales</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
}

export default Headers;