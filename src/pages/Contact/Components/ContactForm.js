import React from 'react';


export function ContactForm() {
    return <div class="col-lg-7">
        <div class="container">
            <div class="form">
                <form name="sentMessage" class="well" id="contactForm" novalidate>
                    <div class="control-group">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Full Name" id="name"
                                required data-validation-required-message="Please enter your name" />
                            <p class="help-block"></p>

                        </div>
                    </div>
                    <div class="form-group">
                        <div class="controls">
                            <input type="email" class="form-control" placeholder="Email" id="email"
                                required data-validation-required-message="Please enter your email" />
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="controls">
                            <textarea rows="10" cols="100" class="form-control" placeholder="Message"
                                id="message" required
                                data-validation-required-message="Please enter your message"
                                minlength="5" data-validation-minlength-message="Min 5 characters"
                                maxlength="999" ></textarea>
                        </div>
                    </div>
                    <div id="success"> </div>

                    <button type="submit" class="btn btn-primary pull-right">Send</button><br />
                </form>
            </div>

        </div>
    </div>
}