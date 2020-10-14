import React from 'react';
import { Link } from 'react-router-dom';

export function Address() {
    return <div class="col-lg-5">
        <div class="contact-address">
            <i class="ion-ios-location-outline"></i>
            <h3>Address</h3>
            <address>Plot # 11 Line 25-B Model Town Phase 2 Wah Cantt, Pakistan</address>
        </div>
        <div class="contact-phone">
            <i class="ion-ios-telephone-outline"></i>
            <h3>Phone Number</h3>
            <p><a href="tel:+92-342-0011719">+92-342-0011719</a></p>
            <p><a href="tel:+92-51-4916360">+92-51-4916360</a></p>

        </div>
        <div class="contact-email">
            <i class="ion-ios-email-outline"></i>
            <h3>Email</h3>
            <p><a href="#">info@capregsoft.com</a></p>
        </div>
    </div>

}