import React from 'react';

/**stateless component as function */
export default function ButtonFunction (props) {
    console.log(props.size);
    return (
        <button> {props.btnLabel} </button>	
    );

}

/* Same with arrow function
export const ButtonFunction = (props) =>{
    return (
        <button>button function {props.btnLabel} </button>	
    );
}
*/