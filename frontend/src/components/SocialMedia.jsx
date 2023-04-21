import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <BsTwitter /> <a href=""></a>
    </div> */}
    <div>
    <a href="https://github.com/anamika7153" target="_blank"><BsGithub /></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/anamika-yadav-24a369191/" target="_blank"><BsLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
