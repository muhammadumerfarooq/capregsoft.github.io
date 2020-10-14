import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (<header id="header">
        <div class="container">
            <div id="logo" class="pull-left">
                <Link to="https://www.capregsoft.com/" id="body" class="scrollto">
                    <span>
                        <div class="logo">
                            <Link href="https://www.capregsoft.com/"><img src="./assets/img/WebLogo.png" alt="logo"
                                style={{ height: "75px" }} alt="No Image" /> </Link>
                        </div>
                    </span>
                </Link>

            </div>
            <nav id="nav-menu-container">
                <ul class="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Career">Career</Link></li>
                </ul>
            </nav>
        </div>
    </header>);
}