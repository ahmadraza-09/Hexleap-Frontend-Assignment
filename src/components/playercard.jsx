import React from 'react';

const PlayerCard = (props) => {
  const { imageSrc, title, totalEvents, sport } = props;

  return (
    <div className="player-card">
      <div className="image-section">
        <img src={imageSrc} alt="" />
      </div>
      <div className="content-section">
        <h3 className="title">{title}</h3>
        <div className="data">
          <div className="total-events">
            <label>Total Events</label>
            <h3>{totalEvents} Events</h3>
          </div>
          <div className="sport">
            <label>Sport</label>
            <h3>{sport}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
