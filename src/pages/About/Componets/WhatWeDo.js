import React, { Fragment } from 'react';

export function WhatWeDo() {
    return <Fragment>
        <section id="about" class="wow fadeInUp">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 about-img">
                        <img src="./assets/img/app-development.svg" alt="No Image" />
                    </div>

                    <div class="col-lg-6 content">
                        <p>We are not just a software house in wahcantt. We are a team of highly skilfull professional
                        developers who have ability to solve the problems for clients.
                        </p>
                        <p>We ensure and satisfy our clients thorugh our consistent performance and our team is full of
                            passionate and hardworking professionals</p>

                        <ul>
                            <h1>What We Do?</h1>

                            <li><i class="icon ion-ios-checkmark-outline"></i> Web Development</li>
                            <li><i class="icon ion-ios-checkmark-outline"></i> Desktop Applications</li>
                            <li><i class="icon ion-ios-checkmark-outline"></i> Mobile Applications</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>



    </Fragment>
}