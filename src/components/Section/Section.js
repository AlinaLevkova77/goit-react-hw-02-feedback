import PropTypes from 'prop-types';
import { Sections ,Title} from 'components/Section/Section.styled.jsx';

const Section = ({ title, children }) => {
  return (
    <Sections>
      {title && <Title>{title}</Title>}
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;