import React from 'react';

export function Hero() {
    return (
        <section id="hero" class="clearfix">
            <div class="container">

                <div class="hero-banner">
                    <img src="./assets/img/8.svg" alt="" class="img-fluid" />
                </div>
                <div class="hero-content">
                    <h4 class="wordC1">

                        <div>
                            <ul class="flp4">
                                <li>React</li>
                                <li>NodeJS</li>
                                <li>Angular</li>
                                <li>Golang</li>
                                <li>Python</li>
                            </ul>
                        </div>
                    </h4>
                    <div style={{ position: 'absolute' }} id="particles-js"></div>
                </div>

            </div>
        </section>
    );
}
