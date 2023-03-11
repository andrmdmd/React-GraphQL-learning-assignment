import React from 'react';


function Episodes() {
  const cars = Array.from({length: 10}, (_, i) => i + 1)
  return (
    <>
	    <ul>
        {cars.map((car) => <p>Episode {car}</p>)}
      </ul>
    </>
  );
}

export default Episodes;