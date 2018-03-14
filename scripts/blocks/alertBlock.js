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


//import CSS
//import './editor.scss';

//Import class names
import classNames from '../classNames';

//Import components for UI
//@TODO

//Export block name for consistency
export const AlertBlockBlockName = 'caldera-learn/alert-block';

//Export block definition, decoupled from block Registration
export const AlertBlock = {


// Block settings

    /**
     * This is the display title for the block, which can be translated with `i18n` functions.
     * The block inserter will show this name.
     */
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

    /**
     * The edit function describes the structure of the block in the context of the editor.
     * This represents what the editor will render when the block is used.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
     *
     * @param {Object} [props] Properties passed from the editor.
     * @return {Element}       Element to render.
     */
    edit: function (props) {
        // Helper function for setting message value during edit
        function onChangeMessage(value) {
            props.setAttributes({message: value});
        }

        // Return HTML to editor
        return el(
            'div',
            {className: props.className},
            el(
                RichText,
                {
                    tagName: 'div',
                    className: classNames.alertMessage,
                    placeholder: __('Important notice message...', 'learn-gutenberg'),
                    value: props.attributes.message,
                    onChange: onChangeMessage,
                    focus: props.focus,
                    onFocus: props.setFocus,
                }
            )
        );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
     *
     * @return {Element} Element to render.
     */
    save: function (props) {
        return el(
            'div',
            {className: props.className},
            el(
                'div',
                {className: classNames.alertMessage},
                props.attributes.message
            )
        );
    },

};
