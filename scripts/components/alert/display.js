//Import a Bootstrap Alert
//https://react-bootstrap.github.io/components/alerts/
import { Alert } from 'react-bootstrap';
import classNames from '../../classNames';
export const AlertDisplay = (props)  => {
    return (
        <Alert bsStyle="warning" >
            <p className={classNames.alertMessage}>{props.message}</p>
        </Alert>
    );
};