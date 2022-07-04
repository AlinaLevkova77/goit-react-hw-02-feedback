import PropTypes from 'prop-types';

import { MainContainer,Text } from 'components/Statistics/Statistics.styled.jsx';

const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
    return (
        <MainContainer>
            <Text>Good:{good} </Text>
            <p></p>
            <Text>Neutral:{neutral}</Text>
            <p></p>
            <Text>Bad:{bad}</Text>
            <p></p>
            <Text>Total:{total}</Text>
            <p></p>
            <Text>Positive Feedback:{positivePercentage}%</Text>
            <p></p>
        </MainContainer>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};


export default Statistics;