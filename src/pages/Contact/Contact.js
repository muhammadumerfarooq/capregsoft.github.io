import React, { Fragment } from 'react';
import { Address } from "./Components/Address";
import { ContactForm } from "./Components/ContactForm";
import { Map } from "./Components/Map";
import { SocialMedia } from "../Shared/SocialMedia";

export function Contact() {
    return <Fragment>
        <section id="innerBanner">
            <div class="inner-content">
                <h2><span>Contact</span></h2>
                <div>
                </div>
            </div>
        </section>

        <main id="main">
            <section id="contact" class="wow fadeInUp">
                <div class="container">
                    <div class="section-header">

                    </div>

                    <div class="row contact-info">
                        <Address />
                        <ContactForm />
                        <Map />
                    </div>
                </div>
            </section>
            <SocialMedia />
        </main>
    </Fragment>
}