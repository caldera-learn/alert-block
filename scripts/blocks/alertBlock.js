/**
 * This file is everything we need to represent the Alert as a block.
 *
 * The block is not registered here, index.js has the responsibility of registering blocks
 */


//Translation functions
const __ = wp.i18n.__;//@TODO import from webpack

//Import class names
import classNames from '../classNames';

//Import components for UI
//Import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//Alert display
import { AlertDisplay } from "../components/alert/display";
import {AlertEditMessage} from "../components/alert/editMessage";
import {AlertSelectType} from "../components/alert/selectType";
import {AlertDisplayWithApiData} from "../components/alert/display";

//Export block name for consistency
export const AlertBlockBlockName = 'caldera-learn/alert-block';
import {Toolbar} from "@wordpress/components";

import {InspectorControls} from "@wordpress/blocks";
import {TextControl} from "@wordpress/components";
import {CheckboxControl} from "@wordpress/components";


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
            type: 'array',
            source: 'children',
            selector: `.${classNames.alertMessage}`,
            default: 'Hi Roy'
        },
        alertType: {
            source: 'attribute',
            selector: 'p',
            attribute: 'type',
        },
        postId: {
            type: 'integer'
        }
    },

    //Edit callback
    edit( { attributes, setAttributes, className, isSelected}) {
        // Helper function for setting message value during edit
        const onChangeMessage = (value) =>  {
            setAttributes({message: value});
        };

        //Handle changes to the alert type
        const onChangeType = (value) => {
            setAttributes({alertType: value});
        };

        //Handle changes to the alert type
        const onChangePostId = (value) => {
            setAttributes({postId: value});
        };

        // Return HTML to editor
        return (
            <div className={className}>
                {isSelected &&
                    <InspectorControls key={'inspector'}>
                        <AlertSelectType
                            type={attributes.alertType}
                            onChange={onChangeType}
                        />
                        <TextControl
                            label={__( 'Remote post ID')}
                            type={'number'}
                            onChange={onChangePostId}
                        />
                    </InspectorControls>

                }
                {isSelected &&
                    <AlertEditMessage
                        message={attributes.message}
                        onChange={onChangeMessage}
                        isSelected={isSelected}

                    />
                }
                {! isSelected &&
                    <AlertDisplayWithApiData
                        type={attributes.alertType}
                        message={attributes.message}
                        postId={attributes.postId}
                    />
                }

            </div>
        );
    },


    // Edit callback
    save ({className,attributes}) {
        return (
            <div className={className}>
                <AlertDisplay
                    type={attributes.alertType}
                    message={attributes.message}
                />
            </div>
        );
    },

};
