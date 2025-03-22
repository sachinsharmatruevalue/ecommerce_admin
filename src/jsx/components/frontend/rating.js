import React from 'react';

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fa fa-star" style={{ color: 'gold' }}></i>);
    } else {
      stars.push(<i key={i} className="fa fa-star-o" style={{ color: 'gold' }}></i>);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;