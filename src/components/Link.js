import React, { useState, useEffect } from "react";
const grabLink = require('youtube-thumbnail-grabber')

const Link = ({ link }) => {
  const [youtubelink, setLink] = useState(null);

  useEffect(() => {
    setLink(link.linkUrl)     
  }, []);

  useEffect(() => {
  }, [youtubelink]);

  return youtubelink ? (
    <div className='container'>
      <div href={youtubelink} className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <a href={youtubelink}>
          <img src={grabLink(youtubelink, 'hq')} alt="Italian Trulli"/>
        </a>
      </div>
    </div>
  ) : (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
    <div>
      <h2>{"Loading"}</h2>
    </div>
  </div>
  );
}

export default Link;
