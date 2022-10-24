import React from 'react';

const AnimeDetails = (props) => {

    const{name,characters,rate}=props

    return (
        <div>
            <h3>Character Details:-{name}</h3>
            <ol>
                <li>{characters[0]} Rating:-{Math.round(+rate)-1}</li>
                <li>{characters[1]} Rating:-{Math.round(+rate)-2}</li>
                <li>{characters[2]} Rating:-{Math.round(+rate)-3}</li>
            </ol>
        </div>
    );
};

export default AnimeDetails;