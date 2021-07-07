import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer-button.css'

function IconButtons () {
  return (
    <div className="footer-btns">
      <IconButton className="facebook-btn" disabled>
        <FacebookIcon style={{ fontSize:"2.3vw" }} />
      </IconButton>
      <IconButton className="twitter-btn">
        <TwitterIcon style={{ fontSize:"2.3vw" }}/>
      </IconButton>
      <IconButton className="linkedin-btn" disabled>
        <LinkedInIcon style={{ fontSize:"2.3vw" }}/>
      </IconButton>
    </div>
  );
}
export default IconButtons