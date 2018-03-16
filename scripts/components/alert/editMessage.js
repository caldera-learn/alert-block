//Extend WordPress component instead of React
import {Component} from "@wordpress/element";
import {RichText} from "@wordpress/blocks";
import classNames from "../../classNames";
const __ = wp.i18n.__;//@TODO import from webpack

export class AlertEditMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }

    render() {
        return (
            <RichText
                value={this.props.message}
                tagName={'p'}
                className={classNames.alertMessage}
                placeholder={__('Important notice message...', 'learn-gutenberg')}
                onChange={this.props.onChange}
                isSelected={this.props.isSelected}
            />
        );

    }
}