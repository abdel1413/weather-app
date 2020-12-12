import React from 'react';

function Temperature(props) {
    const { city, condition, temperature, conditionIcon } = props;

    const conditionToDisplay = conditionIcon ? <img src={conditionIcon} alt="" /> : condition;
    const temperatureToDisplay = temperature ? <p>{temperature}&deg;</p> : null;
    return (
        <div>
            <h3>{city}</h3>
            <p>{conditionToDisplay}</p>
            {temperatureToDisplay}
        </div>
    )
}


export default Temperature;