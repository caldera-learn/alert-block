//Import a Bootstrap Alert
//https://react-bootstrap.github.io/components/alerts/
import { Alert } from 'react-bootstrap';
import classNames from '../../classNames';
import {Component} from "@wordpress/element";

//Basic alert component without HTTP interactions
export const AlertDisplay = (props)  => {
    return (
        <Alert bsStyle={props.type ? props.type : 'warning'} >
            <p
                className={classNames.alertMessage}
                type={props.type}
            >
                {props.message}
            </p>
        </Alert>
    );
};

//Component for showing remote message
export class AlertDisplayWithApiData extends Component {
    constructor(props){
        super(props);
        //Set default message in state from props
        this.state = {
            message: props.message ? props.message : ''
        };
        //Bind update message to this
        this.getRemoteMessage = this.getRemoteMessage.bind(this);
    }

    //Get the API
    getRemoteMessage(){
        wp.apiRequest( {
            //@TODO Make work with posts besides 665
            url: '/wp-json/wp/v2/posts/665'
        }  )
            .then( ( body, status, xhr ) => {
                this.setState({message:body.title.rendered})
            } );
    }

    //Run get message when component mounted
    componentDidMount(){
        this.getRemoteMessage();
    }

    //render
    render(){
        return(
          <AlertDisplay
             message={this.state.message}
          />
        )
    }
}