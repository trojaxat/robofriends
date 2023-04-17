import React, { useState, useEffect, useCallback } from "react";

const Card = ({ id, info, value, onClick }) => {
  const [robotId, setRobotId] = useState(id);

  useEffect(() => { 
    setRobotId(id) 
  }, [id]);

  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' onClick={() => onClick(value)}>
      <img alt='robots' src={`https://robohash.org/${robotId}?size=200x200`} />
      <div>
        <h2>{info}</h2>
      </div>
    </div>
  );
}

export default Card;
