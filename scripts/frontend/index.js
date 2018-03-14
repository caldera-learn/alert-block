//Import WordPress render functions (instead of using react-dom and react.createElement directly)
import { render, createElement } from "@wordpress/element";

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
        blocks.forEach( (blockDOMElement) => {
            //Get content
            //This could be REST API call or some other source
            let content = blockDOMElement.innerHTML;
            //Mount app over same DOM element
            render(
                //Create HTML out of
                createElement(
                    'div',
                    {
                        className: `${classNames.description}-front-outer`
                    },
                    '🌮'
                ),
                blockDOMElement
            );
        });
    }
});

