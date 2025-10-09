import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-containet'>
      <ul className='footerSection'>
        <li>Copyright © VeduApp.cc All Rights Reserved.</li>
      </ul>
      <div className='footerSection'>
        <p>Contact Us: contact@jigsawplanet.us</p>
        <p>Phone: +92 336 3891016</p>
      </div>
    </div>
  );
};

export default Footer;
