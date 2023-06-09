import React from 'react';
import useGallery from '../hooks/Gallery';
import Poverty from '../images/Goals/Goal-No-Poverty.png';
import Hunger from '../images/Goals/Goal-No-Hunger.png';
import goodHealth from '../images/Goals/Goal-Good-Health.png';
import Education from '../images/Goals/Goal-Good-Education.png';
import genderEquality from '../images/Goals/Goal-Gender-Equality.png';
import cleanWater from '../images/Goals/Goal-Clean-Water.png';
import cleanEnergy from '../images/Goals/Goal-Clean-Energy.png';
import decentWork from '../images/Goals/Goal-Decent-Work.png';
import Industry from '../images/Goals/Goal-Industry.png';
import Inequalities from '../images/Goals/Goal-Inequalities.png';
import Sustainable from '../images/Goals/Goal-Sustainable-Cities.png';
import Consumption from '../images/Goals/Goal-Responsible-Consumption.png';
import climateAction from '../images/Goals/Goal-Climate-Action.png';
import belowWater from '../images/Goals/Goal-Life-Water.png';
import onLand from '../images/Goals/Goal-Life-Land.png';
import Institutions from '../images/Goals/Goal-Institutions.png';
import Partnership from '../images/Goals/Goal-Partnership.png';
import Global from '../images/ColorWheel.png';

function Gallery() {
  const images = [
    Poverty,
    Hunger,
    goodHealth,
    Education,
    genderEquality,
    cleanWater,
    cleanEnergy,
    decentWork,
    Industry,
    Inequalities,
    Sustainable,
    Consumption,
    climateAction,
    belowWater,
    onLand,
    Institutions,
    Partnership,
    Global,
  ];

  const { selectedImage, showGallery, handleClick, handleBackToGallery } =
    useGallery();

  return (
    <div className='flex justify-center items-center mt-2'>
      {showGallery ? (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 max-w-[1000px] m-auto gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`World Goals ${index + 1}`}
              onClick={() => handleClick(image)}
              className='w-[100%] cursor-pointer transition duration-150 ease-out hover:ease-in hover:scale-105 grayscale hover:grayscale-0'
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <img
            src={selectedImage}
            alt="Enlarged World Goals"
            onClick={handleBackToGallery}
            className='w-[62%] cursor-pointer'
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
