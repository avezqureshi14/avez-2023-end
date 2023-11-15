import React from 'react';
import { Button } from 'antd';
import { TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const SocialMediaShareButtons = () => {
    const handleTwitterShare = () => {
    const tweetText = encodeURIComponent('Check out this awesome content!'); // Your tweet text here
    const tweetUrl = encodeURIComponent(window.location.href); // URL to share

    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
    
    window.open(twitterShareUrl, '_blank');
  };

  const handleLinkedInShare = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    
    window.open(linkedInShareUrl, '_blank');
  };

  return (
    <div style={{"display":"inline"}} >
      <Button style={{"height":"3rem","padding":"0px 31px","marginLeft":"0rem","border":"2px solid black"}}  color="primary" onClick={handleTwitterShare}>
        <TwitterOutlined />
        Twitter
      </Button>
      <Button style={{"height":"3rem","padding":"0px 31px","marginLeft":"0rem","border":"2px solid black"}}  color="primary" onClick={handleLinkedInShare}>
        <LinkedinOutlined />
        Linkedin
      </Button>
    
    </div>
  );
};

export default SocialMediaShareButtons;
