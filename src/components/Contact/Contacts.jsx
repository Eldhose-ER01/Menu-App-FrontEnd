import React from 'react';
import Nav from '../Navbar/Nav';
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TbBrandFacebook } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import './Style.css';

export default function Contacts() {
  return (
    <>
      <div className='contact-wrapper'>
        <Nav />
        <div className='content-box'>
          <div className='box-item'>
            <div className='box1-properties'>
              <h1>CONNECT WITH US</h1>
              <p className="phone-number">
                <TbDeviceLandlinePhone className="phone-icon" />
                +91 9567843340
              </p>
              <p className="email-properties">
                <MdOutlineMarkEmailUnread className="email-icon" />
                info@deepnetsoft.com
              </p>
            </div>
          </div>
          <div className='box-item'>
            <div className='box1-properties'>
              <h1 className='deep-word'>DEEP <span className='net-word'>NET</span> <span className='soft-word'>SOFT</span></h1>
              <div className='icon-set'>
                <TbBrandFacebook className='social-icon' />
                <CiTwitter className='social-icon' />
                <AiOutlineYoutube className='social-icon' />
                <FaInstagram className='social-icon' />
              </div>
            </div>
          </div>
          <div className='box-item'>
            <div className='box1-properties'>
              <h1>FIND US</h1>
              <p className="location">
                <CiLocationOn className="location-icon" />
                <div>First floor, Geo infopark, Infopark EXPY, Kakkanad</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
