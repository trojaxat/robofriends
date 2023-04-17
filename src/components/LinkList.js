import React, { useState, useEffect } from "react";
import Link from './Link';

const LinkList = ({ links }) => {
  const [currentLinks, setCurrentLinks] = useState(null);

  useEffect(() => {
    setCurrentLinks(links)     
  }, [links]);

  return (
    <div className="container">
      <div className="row">
        {currentLinks ? (
          currentLinks.map((link, index) => (
              <Link key={link.linkUrl} link={link} />
            )
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default LinkList;