// Weather.jsx
import React from 'react';

const Weather = ({ temp }) => {
  let message;

  if (temp < 15) {
    return <h1>Its cold outside</h1>
  } else if (temp >= 15 && temp <= 25) {
        return <h1>Its cold outside</h1>
  } else {
       return <h1>Its cold outside</h1>
  }

};

export default Weather;
