import React from 'react'

const Song = () => {
    return(
    <div style ={{border: "1px solid gray"}}>
        <div>Biisin nimi</div>
        <div>Esittäjä, Julkaisuvuosi</div>
        <div>
            <input type="Button" value="edit" />
            <input type="Button" value="delete" />
        </div>
    </div>
    
    );
};

export default Song;