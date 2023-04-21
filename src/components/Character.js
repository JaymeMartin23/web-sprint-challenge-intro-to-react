// Write your Character component here
import React from "react";


const Characters = (props) => {
    return (
        <div>
            <button onClick={props.getData}>Get Characters</button>
        </div>
    );
};

export default Characters
