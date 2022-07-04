import PropTypes from 'prop-types';
import { Section_ ,Title_} from 'components/Section/Section.styled.jsx';

const Section = ({ title, children }) => {
  return (
    <Section_>
      {title && <Title_>{title}</Title_>}
      {children}
    </Section_>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;