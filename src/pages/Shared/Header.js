import React from 'react';

export function Header() {
    return (<header id="header">
        <div class="container">
            <div id="logo" class="pull-left">
                <a href="/" id="body" class="scrollto">
                    <span>
                        <div class="logo">
                            <a href="/"><img src="./assets/img/WebLogo.png" alt="logo" style={{ height: '75px' }} ></img></a>
                        </div>

                        <nav id="nav-menu-container">
                            <ul class="nav-menu">
                                <li class="menu-active"><a href="/">Home</a></li>
                                <li><a href="/#">About Us</a></li>
                                <li><a href="/#">Services</a></li>
                                <li><a href="/#">Contact</a></li>
                                <li><a href="/#">Career</a></li>
                            </ul>
                        </nav>
                    </span>
                </a>
            </div>
        </div>
    </header>);
}