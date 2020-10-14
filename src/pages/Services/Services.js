import React, { Fragment } from 'react';
import { Service } from "./Components/Service";
import { Client } from "../Shared/Client";
import { ServiceIamge } from "./Components/ServiceImage";
import { SocialMedia } from "../Shared/SocialMedia";

export function Services() {
    return <Fragment>
        <section id="innerBanner">
            <div class="inner-content">
                <h2><span>Services</span></h2>
                <div>
                </div>
            </div>
        </section>
        <main id="main">
            <Service />
            <Client />
            <ServiceIamge />
            <SocialMedia />
        </main>
    </Fragment>
}