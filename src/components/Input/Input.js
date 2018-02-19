import React from 'react';
import classes from './Input.css'
const input =(props) =>{
    let inputElement,validationError=null,
    inputClasses= [classes.InputElement];

    if(props.Invalid && props.shouldValidate && props.isTouched){
        inputClasses.push(classes.Invalid);
        validationError = <p>Please enter a valid value!</p>;
    }
    switch(props.elementType){
        case'input':inputElement= <input className={inputClasses.join(' ')}
         {...props.elementConfig} value={props.value} onChange={props.changed}/>;
        break;
        case'textarea':inputElement= <textarea className={inputClasses.join(' ')}
         {...props.elementConfig} value={props.value} onChange={props.changed}/>;
        break;
        
        default:inputElement= <input className={inputClasses.join(' ')} 
        {...props.elementConfig} value={props.value} onChange={props.changed}/>;
        break;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}
export default input;