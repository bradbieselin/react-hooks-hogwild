import React, { useState } from 'react';

const FilterButtons = ({ hogs, setHogsToDisplay, hogsToDisplay }) => {
    const [showGreased, setShowGreased] = useState(false)
    const [greasedText, setGreasedText] = useState(false)

    const greasedHogs = hogsToDisplay.filter(hog => hog.greased)
    
    function handleFilter() {

        if(!showGreased) {
            // Expects isClicked to be false
            // is the inital state
            // toggle setGreasedText and setIsClicked
            // Sets displayed hog array with greasedHogs
            setGreasedText(true);
            setShowGreased(true);
            setHogsToDisplay(greasedHogs);
            
        } else {
            // Expects isClicked to be true
            // is not the inital state
            // toggle setGreasedText and setIsClicked
            // sets displayed hog array with original full array of hogs
            setGreasedText(false);
            setShowGreased(false);
            setHogsToDisplay(hogs);
        }
    }

    function handleSortByName() {
        let sortedByName = [...hogsToDisplay];
        sortedByName = sortedByName.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        setHogsToDisplay(sortedByName);
    }

    function handleSortByWeight() {
        let sortedByWeight = [...hogsToDisplay];
        sortedByWeight = sortedByWeight.sort((a,b) => (a.weight < b.weight) ? 1 : ((b.weight < a.weight) ? -1 : 0))
        setHogsToDisplay(sortedByWeight);
    }

    return (
        <div className="filterWrapper">
            <button onClick={handleFilter}>{greasedText ? "Show All" : "Show Greased Only"}</button>
            <button onClick={handleSortByName}>Sort by Name</button>
            <button onClick={handleSortByWeight}>Sort by Weight</button>
        </div>
    );
};

export default FilterButtons;