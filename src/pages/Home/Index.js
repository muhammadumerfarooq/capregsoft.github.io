import React, { Fragment } from 'react';
import { About } from "./Components/About";
import { Hero } from "./Components/Hero";
import { Service } from "./Components/Service";
import { Client } from "../Shared/Client";
import { Testomonials } from "../Shared/Testomonials";
import { SocialMedia } from "../Shared/SocialMedia";

export function Index() {
    return <Fragment>
        <Hero />
        <About />
        <Service />
        <Client />
        <Testomonials />
        <SocialMedia />
    </Fragment>
}