import React, { Fragment } from 'react';
import { Requirement } from "./Components/Requirement";
import { KeyRequirement } from "./Components/KeyRequirement";
import { Vacancies } from "./Components/Vacancies";
import { Internship } from "./Components/Internship";
import { Apply } from "./Components/Apply";
import { SocialMedia } from "../Shared/SocialMedia";

export function Career() {
    return <Fragment>
        <section id="innerBanner">
            <div className="inner-content">
                <h2><span>Career's</span></h2>
                <div>
                </div>
            </div>
        </section>

        <Requirement />
        <KeyRequirement />
        <Vacancies />
        <Internship />
        <Apply />
        <SocialMedia />

    </Fragment>
}