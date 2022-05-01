import React, {useState } from 'react';


const HogPic = ({ hog }) => {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick(e) {
        setIsClicked(!isClicked);
    }

    return (
        <div className="ui eight wide column" onClick={handleClick}>
            <h2>{hog.name}</h2>
            <img className="minPigTile" src={hog.image} alt={hog.name} name={hog.name} />
            {isClicked && 
                <ul className="normalText">
                    <li>Speciality: {hog.specialty}</li>
                    <li>Weight: {hog.weight}</li>
                    <li>Greased: {hog.greased ? "Yes" : "No"}</li>
                    <li className="achievementText">Highest Medal Acheived: {hog["highest medal achieved"]} </li>
                </ul>
            }
        </div>
    );
};

export default HogPic;