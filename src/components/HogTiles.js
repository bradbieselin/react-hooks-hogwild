import React from 'react';
import HogPic from './HogPic';


const HogPics = ({ hogsToDisplay }) => {
    console.log("Hog tiles rendering")

    return (
        <div className="ui grid container">
            {hogsToDisplay.map(hog => 
                <HogPic key={hog.name} hog={hog} />
            )}
        </div>
    );
};

export default HogPics;