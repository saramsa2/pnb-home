import React from 'react';
import {ReactComponent as IconAddress} from "../resources/icons/Address.svg"
import {ReactComponent as IconPhone} from "../resources/icons/Phone.svg"
import {ReactComponent as IconEmail} from "../resources/icons/Email.svg"

const Contact = () => {
  return (
    <div>
      <div>
        <div class="row contact justify-content-center">
          <span>
            <p class="col-sm-12 contact-title">GET IN TOUCH</p>
          </span>
          <div class="col-sm-2">
            <div class="rounded-circle contact-icon">
              <IconAddress width={"40"} height={"40"} fill="white" />
            </div>
            <h3 class="contact-icon-title">Address</h3>
            <p class="contact-icon-text">
              138 Plunket Avenue
              <br />
              Manukau City
              <br />
              Auckland 2104
            </p>
          </div>
          <div class="col-sm-2">
            <div class="rounded-circle contact-icon">
              <IconPhone width={"40"} height={"40"} fill="white" />
            </div>
            <h3 class="contact-icon-title">Phone</h3>
            <p class="contact-icon-text">09 263 6373</p>
          </div>
          <div class="col-sm-2">
            <div class="rounded-circle contact-icon">
              <IconEmail width={"40"} height={"40"} fill="white" />
            </div>
            <h3 class="contact-icon-title">Email</h3>
            <p class="contact-icon-text">E-mail address</p>
          </div>
        </div>
        <iframe
          title='address-map'
          class="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.4192250300484!2d174.86783647053147!3d-36.99765065351209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4de91c18749d%3A0x9d0dae51254f8944!2s138%20Plunket%20Avenue%2C%20Manukau%20City%20Centre%2C%20Auckland%202104!5e0!3m2!1sen!2snz!4v1686889801744!5m2!1sen!2snz"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          style={{ border: "0px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;