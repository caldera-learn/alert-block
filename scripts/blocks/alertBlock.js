/**
 * This file is everything we need to represent the Alert as a block.
 *
 * The block is not registered here, index.js has the responsibility of registering blocks
 */

const __ = wp.i18n.__;//@TODO import from webpack

/**
 * Returns a new element of given type. Element is an abstraction layer atop React.
 */
const el = wp.element.createElement; //@TODO use an import

/**
 * Returns a custom component for RichText text.
 */
const RichText = wp.blocks.RichText; //@TODO use an import


//Import class names
import classNames from '../classNames';

//Import components for UI
//@TODO
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert } from 'react-bootstrap';

//Export block name for consistency
export const AlertBlockBlockName = 'caldera-learn/alert-block';

//Export block definition, decoupled from block Registration
export const AlertBlock = {


    // Title
    title: __('Alert Block', 'learn-gutenberg'),

    // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    icon: 'warning',

    /**
     * Blocks are grouped into categories to help with browsing and discovery.
     * The categories provided by core are common, embed, formatting, layout, and widgets.
     */
    category: 'formatting',

    // Additional keywords to surface this block via search input.
    keywords: [
        __('learn-gutenberg'),
        __('shortcode'),
        __('notice'),
    ],

    // Attributes for accessing configurable block data
    attributes: {
        // The editable "message" value, props.attributes.message
        message: {
            type: 'array', // This attribute's value is an array
            source: 'children', // The array contains children elements of the selected element
            selector: `.${classNames.alertMessage}`, // The selected element has a class of "ex4-notice"
        },
    },

    //Edit callback
    edit( { attributes, setAttributes, className, isSelected}) {
        // Helper function for setting message value during edit
        const onChangeMessage = (value) =>  {
            setAttributes({message: value});
        };

        // Return HTML to editor
        return (
            <div className={className}>
                {isSelected &&
                    <RichText
                        value={attributes.message}
                        tagName={'p'}
                        className={classNames.alertMessage}
                        placeholder={ __('Important notice message...', 'learn-gutenberg') }
                        onChange={onChangeMessage}
                        isSelected={isSelected}

                    />
                }
                {! isSelected &&
                    <Alert bsStyle={'warning'} className={classNames.alertMessage}>
                        {attributes.message}
                    </Alert>
                }

            </div>
        );
    },


    // Edit callback
    save ({className,attributes}) {
        return (
            <div className={className}>
                <Alert bsStyle={'warning'} className={classNames.alertMessage}>
                    {attributes.message}
                </Alert>
            </div>
        );
    },

};
