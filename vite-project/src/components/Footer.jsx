import React from 'react'
import logo from "../assets/images/Logo.png"
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram  } from "react-icons/fa";

function Header() {
  return (
    <>
    <footer>
    <div className="container">
      <div className="row row8">
        <div className="col-2">
           <img src={logo} alt="" />
           <div className="webs">
           <FaFacebook className='media'/>
           <FaTwitter className='media'/>
           <FaLinkedinIn className='media'/>
           <FaInstagram className='media'/>
           </div>
        </div>
        <div className="col-2">
          <ul>
            <li><a href="#!">Voice over and Subtitle</a></li>
            <li><a href="#!">Media Center </a></li>
            <li><a href="#!">Privacy</a></li>
            <li><a href="#!">Contact us</a></li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li><a href="#!">Voice Description</a></li>
            <li><a href="#!">Investor Relations</a></li>
            <li><a href="#!">Legal Provisions</a></li>
          </ul>
        </div>
        <div className="col-2">
        <ul>
            <li><a href="#!">Help Center</a></li>
            <li><a href="#!">Job Opportunities</a></li>
            <li><a href="#!">Cookies Preferences</a></li>
          </ul>
        </div>
        <div className="col-2">
        <ul>
            <li><a href="#!">Gift Cards</a></li>
            <li><a href="#!">Terms of Use</a></li>
            <li><a href="#!">Corporate Informations</a></li>
          </ul>
        </div>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Header