import React, { Fragment } from 'react';
import { About } from "./Components/About";
import { Hero } from "./Components/Hero";
import { Service } from "./Components/Service";
import { Client } from "../Shared/Client";
import { Testimonials } from "../Shared/Testimonials";
import { SocialMedia } from "../Shared/SocialMedia";

export function Index() {
    return <Fragment>
        <Hero />
        <About />
        <Service />
        <Client />
        <Testimonials />
        <SocialMedia />
    </Fragment>
}