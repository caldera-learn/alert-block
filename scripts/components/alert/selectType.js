//Extend WordPress component instead of React
import {Component} from "@wordpress/element";
import {SelectControl} from "@wordpress/components";

const __ = wp.i18n.__;//@TODO import from webpack

export class AlertSelectType extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const options = [
            {
                value: 'warning',
                label: __( 'Warning'),
            },
            {
                value: 'danger',
                label: __( 'Danger'),
            },
            {
                value: 'notice',
                label: __( 'Notice'),
            },

        ];
        return (
            <SelectControl
                label={ __( 'Alert Type' ) }
                value={ this.props.type }
                options={ options }
                onChange={ this.props.onChange }
            />

        );

    }
}