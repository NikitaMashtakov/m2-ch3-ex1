import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ value, onClick, disabled }) => {
  return (
    <button className={styles.field} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

FieldLayout.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
