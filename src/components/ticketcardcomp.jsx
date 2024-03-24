import React from 'react';

const TicketCard = ({ title, dateTime, place, imageSrc, buttonText }) => {
  return (
    <div className="ticket-card">
      <div className="liner">----------------------</div>
      <div className="left-cut"></div>
      <div className="right-cut"></div>
      <div className="ticket-images">
        <img src={imageSrc} alt="" />
      </div>
      <div className="ticket-content">
        <h3 className="title">
          {title}
        </h3>

        <div className="date-time">
          <p>{dateTime}</p>
        </div>

        <div className="place">
          <p>{place}</p>
        </div>

        <button>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default TicketCard;
