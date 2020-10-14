import React, { Fragment } from 'react';
import { About } from "./Components/About";
import { Hero } from "./Components/Hero";
import { Service } from "./Components/Service";


export function Index() {
    return <Fragment>
        <About />
        <Hero />
        <Service />
    </Fragment>
}