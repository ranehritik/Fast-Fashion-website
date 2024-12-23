import PropTypes from 'prop-types';
const Button = ({handleclick,value,title}) => {
  return (
    <button onClick={handleclick} value={value} className="btn">{title}</button>
  )
}
Button.propTypes = {
  handleclick: PropTypes.func.isRequired, // handleclick must be a function and is required
  value: PropTypes.string, // value should be a string (optional)
  title: PropTypes.string.isRequired, // title must be a string and is required
};
export default Button

