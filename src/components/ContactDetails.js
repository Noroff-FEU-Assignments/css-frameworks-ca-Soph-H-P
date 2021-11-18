import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const ContactDetails = () => {
  return (
    <div className="contact-details__container">
      <div className="d-flex">
        <FontAwesomeIcon icon={faEnvelope} color="#767676" size="2x" />
        <p>hello@yay.com</p>
      </div>
      <div className="d-flex">
        <FontAwesomeIcon icon={faPhone} color="#767676" size="2x" />
        <p>123 456 7890</p>
      </div>

      <div className="d-flex">
        <FontAwesomeIcon icon={faMapMarkerAlt} color="#767676" size="2x" />
        <div className="d-flex flex-column">
          <p>123 Some Street</p>
          <p>Somewhere</p>
          <p>Some City</p>
          <p>10000</p>
        </div>
      </div>
    </div>
  );
};
