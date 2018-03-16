//Import WordPress render functions (instead of using react-dom and react.createElement directly)
const { render, createElement } = wp.element;
import {AlertDisplayWithApiData} from "../components/alert/display";
//@TODO import more stuff

//Class names for consistency
import classNames from '../classNames';

//Find all static blocks that are alert blocks and replace with React app.
document.addEventListener('DOMContentLoaded', function(event) {
    //Find elements by class
    const blocks = document.getElementsByClassName(`${classNames.alertMessage}`);

    //Check if we found any
    if ( blocks.length) {
        //Loop through each
        blocks.forEach((blockDOMElement) => {
            //@TODO STUFF
        });
    }
});

