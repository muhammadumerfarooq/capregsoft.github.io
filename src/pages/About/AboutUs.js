import React, { Fragment } from 'react';
import { Banner } from "./Componets/Banner";
import { WhatWeDo } from "./Componets/WhatWeDo";
import { Client } from "../Shared/Client";
import { Testomonials } from "../Shared/Testomonials";
import { Team } from "./Componets/Team";
import { SocialMedia } from "../Shared/SocialMedia";

export function AboutUs() {
    return <Fragment>
        <Banner />
        <main id="main">
            <WhatWeDo />
            <Client />
            <Testomonials />
            <Team />
            <SocialMedia />
        </main>
    </Fragment>
}