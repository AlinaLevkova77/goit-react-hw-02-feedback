import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/FeedbackOptions.styled.jsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(button => {
        return (
            <Button
                key={button}
                type='button'
                onClick={onLeaveFeedback}
                name={button}
          >
            {button}
            </Button>
        );
    });
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;