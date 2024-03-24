import React from 'react';
import { useRef } from 'react';
import PlayerCard from './playercard';
import AdsComp from './adscomp';
import TicketCard from './ticketcardcomp';

const Homecomp = () => {

  const scrollContainerRef = useRef(null);
  const backBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth";
      scrollContainerRef.current.scrollLeft += 250;
    }
  };

  
  const handleBackClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth";
      scrollContainerRef.current.scrollLeft -= 250;
    }
  };

  const playerDataList = [
  {
    imageSrc: 'Images/player-img1.png',
    title: 'Sacramento River Cats',
    totalEvents: 48,
    sport: 'Baseball',
  },
  {
    imageSrc: 'Images/player-img2.png',
    title: 'Las Vegas Aviators',
    totalEvents: 28,
    sport: 'Baseball',
  },
  {
      imageSrc: 'Images/player-img3.png',
      title: 'New Jersey Devils',
      totalEvents: 15,
      sport: 'Ice Hockey',
  },
  {
    imageSrc: 'Images/player-img2.png',
    title: 'Las Vegas Aviators',
    totalEvents: 28,
    sport: 'Baseball',
  }
];

const ticketDataList = [
        {
            imageSrc: 'Images/ticket-img1.png',
            title: 'Las Vegas Aviators',
            dateTime: 'OCT 15 | SUN | 4:30 PM',
            place: 'Las Vegas Ballpark, Las Vegas, Nevada',
            buttonText: 'Take Flight Collection'
        },
        {
            imageSrc: 'Images/ticket-img2.png',
            title: 'Sacramento River Cats',
            dateTime: 'OCT 15 | SUN | 4:30 PM',
            place: 'Sutter Health Park, Sacramento, California',
            buttonText: 'Orange Collection'
        },
        {
            imageSrc: 'Images/ticket-img1.png',
            title: 'Las Vegas Aviators',
            dateTime: 'OCT 15 | SUN | 4:30 PM',
            place: 'Las Vegas Ballpark, Las Vegas, Nevada',
            buttonText: 'Take Flight Collection'
        },
        {
            imageSrc: 'Images/ticket-img1.png',
            title: 'Las Vegas Aviators',
            dateTime: 'OCT 15 | SUN | 4:30 PM',
            place: 'Las Vegas Ballpark, Las Vegas, Nevada',
            buttonText: 'Take Flight Collection'
        },
        {
            imageSrc: 'Images/ticket-img1.png',
            title: 'Las Vegas Aviators',
            dateTime: 'OCT 15 | SUN | 4:30 PM',
            place: 'Las Vegas Ballpark, Las Vegas, Nevada',
            buttonText: 'Take Flight Collection'
        }
];


  return (
    <>
    <div className="sports-section">
      <h2>Sports</h2>
      <div className="players-cards">
        {playerDataList.map((playerData, index) => (
          <PlayerCard
            key={index} // It's important to provide a unique key when rendering components in a loop
            imageSrc={playerData.imageSrc}
            title={playerData.title}
            totalEvents={playerData.totalEvents}
            sport={playerData.sport}
          />
        ))}
        {<AdsComp/>}
      </div>
      <button>See More</button>
    </div>

    <div className="collection-spotlight-section">
        <div className="header">
            <div className="heading">
                <h2>Collection Spotlight</h2>
            </div>
            <p className="description">
                Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
            </p>
        </div>

        <div className="ticket-slider-section">
            <i class="fa-solid fa-angle-left" ref={backBtnRef} onClick={handleBackClick}></i>
            <div className="ticket-slider" ref={scrollContainerRef}>
                {ticketDataList.map((ticketData, index) => (
                    <TicketCard
                        key={index} // It's important to provide a unique key when rendering components in a loop
                        imageSrc={ticketData.imageSrc}
                        title={ticketData.title}
                        dateTime={ticketData.dateTime}
                        place={ticketData.place}
                        buttonText={ticketData.buttonText}
                    />
                ))}
            </div>
            <i class="fa-solid fa-angle-right" ref={nextBtnRef} onClick={handleNextClick}></i>
        </div>
    </div>
    </>
  );
};

export default Homecomp;
