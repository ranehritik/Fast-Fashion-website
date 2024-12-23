import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import PropTypes from 'prop-types';


const Card = ({img,title,newPrice,handlecartclick}) => {


  const handleClick = () => {
    if (handlecartclick) {
      handlecartclick(); // Call the parent-provided function
    }
    alert(`${title} added to cart`); // Show the alert immediately
  }
    
  return (
    <div className="card">
    <div className="card-img">
      <img src={img} alt={title} className="img"/>
    </div>
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="prize">
      <h4>Prize</h4>
      <h3>₹{newPrice}</h3>
    </div>
    <div className="whislist">
      <button className="whislist-btn"><CiHeart className="heart-btn" /></button>
    </div>
    <div className="cart">
    <button onClick={handleClick} className="cart-button" ><FiShoppingCart /></button>
    </div>
</div>
  )
}
Card.propTypes = {
  img: PropTypes.string.isRequired,               // img should be a required string
  title: PropTypes.string.isRequired,             // title should be a required string
  newPrice: PropTypes.oneOfType([                 // newPrice can be a string or number
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  handlecartclick: PropTypes.func.isRequired,     // handlecartclick should be a required function
  handlewishlistclick: PropTypes.func.isRequired  // handlewishlistclick should be a required function
};
export default Card
