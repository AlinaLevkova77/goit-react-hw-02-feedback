import PropTypes from 'prop-types';
import { Title } from 'components/Notification/Notification.styled.jsx';

const Notification = ({ message }) => {
    return <Title>{message}</Title>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;